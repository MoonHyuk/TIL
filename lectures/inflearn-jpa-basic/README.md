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

## 8-2) 즉시 로딩과 지연 로딩

엔티티에서 관계 설정할 때 `fetch` 설정으로 즉시 로딩 또는 지연 로딩을 설정할 수 있다.

**실무에서는 즉시 로딩을 사용하면 안된다.**

- 즉시 로딩 설정을 하고 JPQL select 문을 쓰면 N+1 Problem이 발생한다.

  - `List<Member> members = em.createQuery("select m from Member m", Member.class).getResultList();` 을 실행하면 아래처럼 여러개의 쿼리가 나간다.

  - ```
    Hibernate: 
        /* select
            m 
        from
            Member m */ select
                member0_.id as id1_0_,
                member0_.name as name2_0_,
                member0_.team_id as team_id3_0_ 
            from
                Member member0_
    Hibernate: 
        select
            team0_.id as id1_1_0_ 
        from
            Team team0_ 
        where
            team0_.id=?
    Hibernate: 
        select
            team0_.id as id1_1_0_ 
        from
            Team team0_ 
        where
            team0_.id=?
    Hibernate: 
        select
            team0_.id as id1_1_0_ 
        from
            Team team0_ 
        where
            team0_.id=?
    ...
    ```

  - 이런 악영향을 줄이려면 **가능한 지연 로딩을 사용**하고 N+1 problem 없이 연관 관계를 같이 불러오고 싶을 땐

    - fetch join을 사용하거나
    - batch size 설정을 해준다.

  - **ManyToOne, OneToOne 관게는 기본 값이 즉시 로딩이므로 이를 지연 로딩으로 바꿔줘야 한다.**



### 8-3) CASCADE

`@OneToMany(cascade=CascadeType.ALL)`

### 8-4) orphanRemoval

`@OneToMany(orphanRemoval = true)` 옵션을 사용하면 관계가 끊긴 자식은 자동으로 삭제된다.

예를들어 

```java
Team findTeam = em.createQuery("select t from Team t join fetch t.members where t.id = :teamId", Team.class)
        .setParameter("teamId", 1L)
        .getSingleResult();

findTeam.getMembers().remove(0); // findTeam과 0번째 멤버의 관계가 끊어지고 0번째 멤버가 데이터베이스에서 삭제된다.

em.remove(findTeam); // findTeam과 관계가 있는 members가 모두 삭제된다. cascade=CascadeType.REMOVE 와 동작이 같다.
```

orphanRemoval 옵션은 자식 객체를 참조하는 부모 객체가 하나일 때만 사용해야 안전하다.

`cascade=CascadeType.ALL`과 `orphanRemoval=true` 를 함께 사용하면 DDD에서의 애그리거트 루트 엔티티 개념을 구현할 수 있다.



## 10. JPQL

### 10-4) 페치 조인

페치 조인은 하나의 쿼리로 연관 객체를 모두 가져오고 싶을 때 사용한다.

예를들어 team을 조회하면서 team에 소속된 모든 members를 함께 조회하고 싶을 때 사용한다.



#### 주의

- members 내에서 조건절로 일부만 가져오고 싶다면 페치 조인 말고 다른 방법을 사용하자.
  - team.getMembers() 했을 때 전체 members가 아닌 일부 members만 나오는 건 JPA 설계에 맞지 않음

- collection을 페치 조인할 경우 데이터 뻥튀기가 일어나 데이터 갯수가 실제와 달라진다.

  - 예를들어 team1에는 member1과 member2가 있고 team2에는 member3이 있다면

  - ```java
    List<Team> teams = em.createQuery("select t from Team t join fetch t.members", Team.class)
             .getResultList();
    
    System.out.println("teams.size() = " + teams.size());
    for (Team t : teams) {
        for (Member tMember : t.getMembers()) {
            System.out.println("teamId: " + t.getId() + ", memberId: " + tMember.getId());
        }
    }
    
    // 실행결과:
    // teams.size() = 3
    // teamId: 1, memberId: 1
    // teamId: 1, memberId: 2
    // teamId: 1, memberId: 1
    // teamId: 1, memberId: 2
    // teamId: 2, memberId: 3
    ```

  - 위 예시를 보면 teams 컬렉션 안에 team1이 두 번 들어가서 size가 3이다. member의 수 만큼 team이 중복되어 들어가진다.

  - 만약 중복되는 걸 원치 않는다면 `select distinct ...` 를 사용하면 된다.

- 두 개 이상의 collection을 한 번에 페치 조인 하지 말아야 한다. (데이터 뻥튀기가 두번 되어 데이터가 너무 많아짐)
- collection을 페치 조인한 경우 페이징은 사용하면 안된다.
  - 일대일, 다대일 같은 단일값 연관 필드들은 페치 조인해도 페이징 가능
  - 페이징 API를 사용할 경우 하이버네이트는 경고 로그를 남기며 테이블의 모든 데이터를 메모리에 올린 후 페이징 처리한다. 이는 성능에 매우 매우 안좋음.
  - 페이징을 사용하면서 N+1 Problem을 겪지 않고 싶은 경우엔
    - 반대쪽 엔티티에서 페치 조인을 하거나(비즈니스 로직이 허락한다면)
    - `@BatchSize(size = ...)` 어노테이션 또는 글로벌 세팅 `hibernate.default_batch_fetch_size` 사용 - 연관 객체를 가져올 때 `in` 을 사용하여 한번에 size만큼 가져온다. N+1 Problem을 줄여줌.
  - 여러 테이블을 조인해서 엔티티가 가진 모양이 아닌 전혀 다른 결과를 내야 한다면 페치 조인 보다는 일반 조인을 사용하고 필요 한 데이터들만 조회해서 DTO로 반환하는 것이 효과적