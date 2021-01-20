# 인프런 JPA 프로그래밍 기본편 - 김영한 선생님

https://www.inflearn.com/course/ORM-JPA-Basic/dashboard

## JPA 시작하기

### 데이터베이스 방언

- JPA 설정 파일의 "hibernate.dialect" 프로퍼티
- 데이터베이스 마다 문법이 다름. 예: MySQL에선 LIMIT, Oracle에선 ROWNUM
- JPA 코드가 데이터베이스에 종속적이지 않게 hibernate가 방언 매핑 기능을 제공

### JPA 구동 방식

- Persistence 클래스가 설정 정보를 조회하여 EntityManagerFactory 생성
- EntityManagerFactory가 다수의 EntityManager 생성

### 간단한 사용 방법

- 생성

```java
Member member = new Member();
member.setName("moon");

em.persist(member);
```

- pk로 조회

```java
Member findMember = em.find(Member.class, 1L);
```

- 수정

```java
findMember.setName("hyuk");
```

`em.persist`를 다시 실행하지 않아도 된다!

- 삭제

```java
em.remove(findMember);
```

### 주의

- EntityManagerFactory는 어플리케이션 전체에 데이터베이스 별로 단 하나씩만 생성되어야 한다.

- EntityManager는 client의 요청 당 하나씩 생성된다. 쓰레드 간 공유가 되어선 안된다.
- JPA의 모든 데이터 변경은 트랜잭션 안에서 이뤄줘야 한다.

### JPQL

- 복잡한 검색 등은 결국 쿼리가 필요함
- JPQL은 객체 지향 SQL임

## 영속성 관리

`em.persist(member);` 는 데이터베이스에 실제로 저장을 하는 것이 아니라 `영속성 컨텍스트` 에 영속화 하는 것이다.

### 엔티티의 생명주기

엔티티의 영속성 상태는 4가지가 있다.

- 비영속: 영속성 컨텍스트와 관계가 없는 새로운 상태

```java
Member member = new Member();
member.setId(1L);
// member는 현재 비영속 상태
```

- 영속: 영속성 컨텍스트에서 관리되는 상태

```java
em.persist(member);
```

- 준영속: 영속성 컨텍스트에 저장되었다가 분리된 상태

```java
em.detach(member);
```

- 삭제: 삭제된 상태

```java
em.remove(member);
```

### 영속성 컨텍스트의 이점

- 1차 캐시

```java
em.persist(member); // 영속성 컨텍스트에 영속화한다. 1차 캐싱됨
em.find(Member.class, member.getId()); // 1차 캐시에서 가져온다. select 쿼리가 실행되지 않음
```

```java
em.find(Member.class, 1L); // select 쿼리를 실행하여 엔티티를 가져오고 1차 캐시에 넣는다.
em.find(Member.class, 1L); // 1차 캐시에서 가져온다. select 쿼리가 실행되지 않음
```

사실 영속성 컨텍스트는 한 요청 내에서만 살아있으므로 1차 캐시의 이점이 그렇게 크진 않다.

어플리케이션 수준에서 캐싱하는 2차 캐시도 있음.

- 엔티티 동일성 보장

```java
Member a = em.find(Member.class, 1L);
Member b = em.find(Member.class, 1L);

System.out.println(a == b) // true
```

- 쓰기 지연

insert 또는 update 쿼리를 모아서 배치 단위로 실행하여 성능 향상에 도움을 줄 수 있다.

배치 사이즈는 `hibernate.jdbc.batch_size` 로 설정할 수 있다.

```java
em.persist(member1); // insert 쿼리가 아직 실행되지 않는다.
em.persist(member2); // insert 쿼리가 아직 실행되지 않는다.

tx.commit(); // 트랜잭션 커밋할 때 insert 쿼리가 한 번에 실행된다.
```

- 변경 감지

```java
Member findMember = em.find(Member.class, 1L);
findMember.setName("changed name");

// em.persist(findMember); // 이 걸 실행해 줄 필요가 없다. 오히려 실행하지 말아야 한다!

tx.commit(); // 트랜잭션 커밋할 때 영속성 컨텍스트에서 변경된 엔티티들을 감지하여 알아서 update 쿼리를 실행해준다.
```

