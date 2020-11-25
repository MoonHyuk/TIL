# 팩토리 패턴

```php
// Animal.php
interface Animal
{
    public function walk();
}

// Dog.php
class Dog implements Animal
{
    public function walk()
    {
        echo 'dog walks';
    }
}

// Cat.php
class Cat implements Animal
{
    public function walk()
    {
        echo 'cat walks';
    }
}

// Wolf.php
class Wolf implements Animal
{
    public function walk()
    {
        echo 'wolf walks';
    }

}

// index.php
if ($type === 'dog') {
    $pet = new Dog();
} else if ($type === 'Cat') {
    $pet = new Cat();
} else if ($type === 'wolf') {
    $pet = new Wolf();
}

$pet->walk();
```

우리는 종종 위와 같은 코드를 작성한다.  
위 코드의 문제는 `객체 생성`과 `객체 사용`이 한 코드에 공존하고 있고, 심지어 그 객체가 바뀌거나 추가될 가능성이 크다는 점이다.  
구상 객체를 생성했다는 건 그 구상 객체에 의존한다는 뜻이다. 이는 `의존성 역전의 원칙`을 어긴다.

따라서 객체 생성을 코드에서 분리해야 하는데 `팩토리 패턴`은 그것을 가능하게 하는 방법 중 하나이다.  
팩토리 패턴에는 `단순 팩토리 패턴`, `팩토리 메소드 패턴`, `추상 팩토리 패턴`이 있고, 목적에 따라 사용하면 된다.

## 단순 팩토리 패턴

단순 팩토리 패턴은 가장 쉬운 팩토리 패턴이다. 많은 사람들은 이걸 디자인 패턴이라고 보지 않기도 한다.

```php
// PetFactory.php
class PetFactory
{
    public static function create(string $type): Animal
    {
        if ($type === 'dog') {
            return new Dog();
        } else if ($type === 'Cat') {
            return new Cat();
        } else if ($type === 'wolf') {
            return new Wolf();
        }
    }
}

// index.php
$pet = PetFactory::create('dog');
$pet->walk();
```

단순 팩토리 패턴은 그저 한 클래스를 만들어 객체 생성을 담당하게 한다. 만약 객체 생성 과정이 단순하다면 이 정도로도 충분해 보인다.
