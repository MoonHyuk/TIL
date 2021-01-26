# 인프런 JPA 프로그래밍 기본편 - 김영한 선생님

https://www.inflearn.com/course/ORM-JPA-Basic/dashboard

## 1. JPA 시작하기

### 1-1) 데이터베이스 방언

- JPA 설정 파일의 "hibernate.dialect" 프로퍼티
- 데이터베이스 마다 문법이 다름. 예: MySQL에선 LIMIT, Oracle에선 ROWNUM
- JPA 코드가 데이터베이스에 종속적이지 않게 hibernate가 방언 매핑 기능을 제공

### 1-2) JPA 구동 방식

- Persistence 클래스가 설정 정보를 조회하여 EntityManagerFactory 생성
- EntityManagerFactory가 다수의 EntityManager 생성

### 1-3) 간단한 사용 방법

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

### 1-4) 주의

- EntityManagerFactory는 어플리케이션 전체에 데이터베이스 별로 단 하나씩만 생성되어야 한다.

- EntityManager는 client의 요청 당 하나씩 생성된다. 쓰레드 간 공유가 되어선 안된다.
- JPA의 모든 데이터 변경은 트랜잭션 안에서 이뤄줘야 한다.

### 1-5) JPQL

- 복잡한 검색 등은 결국 쿼리가 필요함
- JPQL은 객체 지향 SQL임

## 2. 영속성 관리

`em.persist(member);` 는 데이터베이스에 실제로 저장을 하는 것이 아니라 `영속성 컨텍스트` 에 영속화 하는 것이다.

### 2-1) 엔티티의 생명주기

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

### 2-2) 영속성 컨텍스트의 이점

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

### 2-3) 플러시

플러시란 영속성 컨텍스트 내 변경점을 데이터 베이스에 동기화 하는 것이다. 엔티티 매니저를 통해 플러시를 직접 실행 할 수도 있지만 일반적으론 자동으로 실행하게 한다.

플러시가 자동으로 실행되는 시점은 엔티티 매니저의 설정에 따라 다르다.

- `em.setFlushMode(FlushModeType.AUTO)` (기본값)
  - 트랜잭션 커밋하기 전
  - JPQL 실행하기 전
- `em.setFlushMode(FlushModeType.COMMIT)`
  - 트랜잭션 커밋하기 전

플러시는 영속성 컨텍스트를 비우진 않는다. 영속성 컨텍스트를 비우려면 `em.clear()` 또는 `em.close()` 를 한다.

### 2-4) 준영속 상태

영속성 컨텍스트에서 관리되다가 분리(detach)된 상태를 준영속 상태라고 한다.

준영속 상태의 엔티티들은 더이상 영속성 컨텍스트의 기능들을 사용할 수 없게 된다.

`em.detach(entity)` 로 엔티티를 준영속 상태로 만들 수 있다.



## 8. 프록시와 연관관계 관리

### 8-1) 프록시

```java
Member findMember = em.find(Member.class, 1L);
Team memberTeam = findMember.getTeam(); // Member에서 Team이 LAZY로딩으로 걸려있다면 proxy 객체를 반환한다.

System.out.println(memberTeam.getClass()); // class hellojpa.Team$HibernateProxy$Sv2wTd0S
```

연관 관계의 fetchType이 LAZY로딩으로 걸려있는 경우 연관 관계 객체를 가져올 때 프록시 객체를 가져오게 된다.

위 예시에서 memberTeam은 아직까지는 빈 껍데기의 프록시 객체이며 실제로 team을 가져오는 select 쿼리는 아직 날아가지 않는다.

이후 memberTeam.getName() 처럼 연관 관계의 데이터를 접근할 때야 team을 가져오는 select 쿼리가 날아가 프록시 객체가 초기화된다.

사용자 입장에선 객체가 프록시 객체인지 엔티티 객체인지 알 필요 없이 사용하면 된다.



#### 8-1-1) 프록시 관련 메소드들

- `emf.getPersistenceUnitUtil().isLoaded(entity)`: 프록시 객체가 초기화 됐는지 확인
- `org.hibernate.Hibernate.initialize(entity)`: 프록시 강제 초기화

