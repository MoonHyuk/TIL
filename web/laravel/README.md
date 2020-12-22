# Laravel

## 목차

- [API 테스트 시 어떤 오류가 났는지 확인하는 방법](#api-테스트-시-어떤-오류가-났는지-확인하는-방법)
- [서비스 컨테이너](#서비스-컨테이너)

## API 테스트 시 어떤 오류가 났는지 확인하는 방법

### 문제점

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;

class SomethingTest extends TestCase
{
    public function testSomthing()
    {
        $this->postJson('/api/something', [
            'name' => 'something',
        ])->assertStatus(201)
        ->assertJson([
            'message' => 'success',
        ]);
    }

    // ...
}
```

위와 같은 테스트를 실행했을 때 어디선가 오류가 나면 이런 메시지가 나온다.

```
Expected status code 201 but received 500.
Failed asserting that 201 is identical to 500.
```

이 메시지로는 어떤 오류가 어디서 났는지 도저히 찾을 수 없다.  
그래서 어떤 오류인지를 확인하기 위해 이런 짓을 반복했다.

```php
        $response = $this->postJson('/api/something', [
            'name' => 'something',
        ])->dump();

        dd($response);
```

이러면 콘솔에 오류가 찍히지만 오류가 날때마다 테스트 코드를 수정해가며 확인하는 건 너무 귀찮다. 분명 다른 방법이 있을거 같아 찾아보았다.

### withoutExceptionHandling

처음으로 찾게된 건 `$this->withoutExceptionHandling();`을 추가하여 테스트 코드에서 에러 핸들링을 하지 않게 하는 방법이었다.

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;

class SomethingTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->withoutExceptionHandling();
    }

    public function testSomthing()
    {
        $this->postJson('/api/something', [
            'name' => 'something',
        ])->assertStatus(201)
        ->assertJson([
            'message' => 'success',
        ]);
    }

    // ...
}
```

```
1) Tests\Feature\SomethingTest::testSomething
ErrorException: Undefined variable: respons

/app/app/Http/Controllers/SomethingController.php:20
/app/vendor/laravel/framework/src/Illuminate/Routing/Controller.php:54
/app/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php:45
...
```

이제 오류 메시지가 잘 출력된다.

하지만 이 방법은 문제가 하나 있었다. 사실 `SomethingTest`에는 테스트 케이스가 하나 더 있었는데, `name` 필드를 전달하지 않은 경우 `422` 코드와 적절한 메시지를 반환하는지 테스트하는 것이었다.

```php
// ...
        $this->postJson('/api/something', [])
        ->assertStatus(422)
        ->assertJson([
            'message' => 'The given data was invalid.',
            'errors' => [
                'name' => [
                    'The name field is required.',
                ],
            ],
        ]);
// ...
```

만약 라라벨 `Form Request`를 사용해서 validation을 구현했다면 `$this->withoutExceptionHandling();`를 추가하면 위 테스트는 항상 실패한다.

왜냐하면 `Form Request`에서 `ValidationException`을 던지는데, 우리가 모든 Exception을 핸들링하지 말라고 말했기 때문이다.

```
Illuminate\Validation\ValidationException: The given data was invalid.

/app/vendor/laravel/framework/src/Illuminate/Foundation/Http/FormRequest.php:130
/app/vendor/laravel/framework/src/Illuminate/Validation/ValidatesWhenResolvedTrait.php:26
...
```

이건 대부분의 의도와는 다른 결과일 것이다.

### handleValidationExceptions

만약 `ValidationException`은 무시하고 싶다면

`$this->withoutExceptionHandling();` 대신에  
 `$this->handleValidationExceptions();`를 사용한다.

메소드 이름 그대로 `ValidationException`만 핸들링하고, 다른 Exception들은 오류를 내줄 것이다.

## 서비스 컨테이너

서비스 컨테이너는 라라벨에서 클래스 간 의존성을 제어할 수 있게 해준다. 서비스 컨테이너를 사용하게 되는 경우는 두가지이다.

1. 인터페이스를 구현한 특정 구체 클래스를 사용하겠다고 알리고 싶을 때
2. 라라벨 패키지를 만들었을 때

대부분의 경우엔 1번 이유로 서비스 컨테이너를 사용하게 될 것 같다.

예를들어 `EventPusher` 인터페이스를 사용하는 어떤 클래스가 있다고 하자.

```php
use App\Contracts\EventPusher;

public function __construct(EventPusher $pusher)
{
    $this->pusher = $pusher;
}
```

그리고 지금은 `EventPusher` 인터페이스를 구현한 `RedisEventPusher` 구체 클래스를 사용하고 싶다면 서비스 컨테이너에 아래처럼 구체 클래스를 바인딩해준다.

```php
use App\Contrats\EventPusher;
use App\Services\RedisEventPusher;

$this->app->bind(EventPusher::class, RedisEventPusher::class);
```

만약 나중에 `MysqlEventPusher`가 구현되어 구체 클래스를 바꾸고 싶다면 서비스 컨테이너만 수정해주면 된다.