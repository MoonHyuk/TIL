# DEVIEW 2019: Fail Fast, Learn Faster SRE

https://tv.naver.com/v/11211080

## 1. 왜 SRE를 도입해야 하는가

- 네이버 검색은 365일 24시간 무중단 제공되어야 한다.
- 서비스는 점점 커지는 데 엔지니어는 그만큼 뽑을 수 없다.
- 재난 상황에선 기존 장애 대응방안이 동작하지 않는다.
  - 2016년 9월 경주 지진 당시 평소 대비 3배 트래픽 => 통합검색 서비스 10분간 장애 발생
  - 장애 영향도 파악에 1시간, 포스트모텀 작성에 48시간 걸림
  - 기존의 DevOps 방법론으로는 감당 불가. SRE 필요성을 느끼고 2016년 말 도입 결정



## 2. 우리들의 SRE

- 모니터링, 경보 등을 해주는 좋은 오픈소스들은 이미 많이 나와있다..
- 하지만 우리에게 중요한 건 Tool이 아니라 현실에 닥친 `문제`를 해결하는 것.
- 문제점은 뭐였나?
  - 비상상황에 대한 정의와 대응 체계의 부재
    - 비상 상황을 정의
      - CP_1: 경쟁사 서비스 장애로 인한 트래픽 증가
      - CP_2: 국가적 관심사로 인한 트래픽 증가
  - 장애 발생 Detection의 어려움 (어떤 부분이 어떤 정도로 장애를 일으켰나?)
    - 네이버만의 가용량 공식 적용
  - Post-Mortem 문화 부재
    - Post-Mortem 문화를 정착시키기 위해 시간을 투자함
    - 첫 3개월 동안은 SRE가 작성하며 문화를 전파했고 현재는 서비스 엔지니어들이 자율적으로 작성하고 있음
  - 전체 시스템 현황 확인 불가