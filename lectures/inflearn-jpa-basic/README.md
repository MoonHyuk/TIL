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