// 행사 목록 — 이 파일만 고치면 모든 페이지가 바뀝니다.
//
// 행사 하나 = { } 한 덩어리. 새 행사를 넣을 때는 비슷한 행사를 복사해서 값을 바꾸세요.
//   headline : (국제 교류) 학교 이름 대신 크게 보일 주제. 예: "AI and Social Science"
//   hosts    : (국제 교류) 공동 주최 기관을 적는 작은 줄.
//   still    : (국제 교류) wide 카드의 큰 그림. 없으면 유튜브 대표 화면을 씁니다.
//   hideHomeVideo : true면 첫 화면 "강연 영상"에는 나오지 않습니다.
//   wide     : (국제 교류) true면 카드가 두 칸을 다 차지하고, 오른쪽에 영상(또는 첫 사진)을 크게 둡니다.
//   photos   : (국제 교류) 글 아래에 작게 붙는 가로 그림들 — 현장 사진, 가로형 프로그램표. 누르면 크게 보입니다.
//   partner  : (국제 교류) 카드의 큰 이름. 예: "KU × NCCU".  place : 상대 학교·개최지
//   cat      : lecture(특강)·workshop(방법론 워크숍) → "AI·방법론" 페이지
//              research(포스터페어·연구 지원) → "대학원생 연구" 페이지
//              intl → "국제 교류" 페이지, career → "커리어" 페이지
//   series   : 같은 시리즈끼리 묶여서 표시됩니다.
//   tag      : 첫 화면 목록에서 제목 앞에 [커리어 테이블]처럼 붙는 짧은 분류
//   date     : YYYY-MM-DD (여러 날이면 dateEnd 추가)
//   title    : 비워 두면 "제목 추후 업데이트"로 표시됩니다. "제목: 부제"로 쓰면 부제는 다음 줄에 놓입니다.
//   time, venue, no, summary : 기록용 (화면에는 표시하지 않습니다)
//   video    : YouTube 영상 ID (주소의 v= 뒤 11글자). 넣으면 첫 화면 "강연 영상"에서 바로 재생됩니다.
//   videoSoon: true 이면 첫 화면에 "공개 준비 중"으로 표시됩니다.
//   thumb    : 영상 미리보기 이미지 (비우면 YouTube 썸네일을 씁니다)
//   poster   : assets/img/ 안의 이미지 경로 (누르면 크게 보입니다)
//   summary  : 내부 메모용 설명 (화면에는 표시하지 않습니다)
//   body     : 행사 아래에 바로 보이는 프로그램 표 (HTML, <h4> 단위로 나란히 배치)

window.EVENTS = [

  // ───────── AI와 사회과학 특강 시리즈 (2026년 1학기) ─────────
  { id: "ai-2026s-01", cat: "lecture", series: "AI와 사회과학 특강 시리즈 · 2026년 1학기", tag: "AI 특강", no: "1회",
    date: "2026-03-27", time: "10:00–12:00", title: "AI와 정치학 연구",
    speaker: "이인복", affil: "연세대학교", venue: "SK미래관 312호", mode: "대면",
    poster: "assets/img/lecture_2026s_01_rhee.jpg" },
  { id: "ai-2026s-02", cat: "lecture", series: "AI와 사회과학 특강 시리즈 · 2026년 1학기", tag: "AI 특강", no: "2회",
    date: "2026-04-03", time: "10:00–12:00", title: "AI와 정치 커뮤니케이션 연구",
    speaker: "윤호영", affil: "이화여자대학교", venue: "SK미래관 312호", mode: "대면",
    poster: "assets/img/lecture_2026s_02_yoon.jpg" },
  { id: "ai-2026s-03", cat: "lecture", series: "AI와 사회과학 특강 시리즈 · 2026년 1학기", tag: "AI 특강", no: "3회",
    date: "2026-04-10", time: "10:00–12:00",
    title: "Uneven Automation: AI's Impact on Software Tasks Varies by Difficulty and Data Availability",
    speaker: "김란우", affil: "KAIST", venue: "SK미래관 312호", mode: "대면",
    poster: "assets/img/lecture_2026s_03_kim.jpg" },
  { id: "ai-2026s-04", cat: "lecture", series: "AI와 사회과학 특강 시리즈 · 2026년 1학기", tag: "AI 특강", no: "4회",
    date: "2026-05-01", time: "16:00–18:00", title: "When Do Citizens Resist the Use of AI Algorithms in Public Policy? Theory and Evidence",
    speaker: "Shir Raviv", affil: "Tel Aviv University", venue: "Zoom", mode: "온라인",
    poster: "assets/img/lecture_2026s_04_raviv.jpg" },
  { id: "ai-2026s-05", cat: "lecture", series: "AI와 사회과학 특강 시리즈 · 2026년 1학기", tag: "AI 특강", no: "5회",
    date: "2026-05-08", time: "10:00–12:00", title: "AI 시대의 정부: 정치경제적 함의와 연구적 기회",
    speaker: "하헌욱", affil: "University of Michigan", venue: "Zoom", mode: "온라인",
    poster: "assets/img/lecture_2026s_05_ha.jpg" },
  { id: "ai-2026s-06", cat: "lecture", series: "AI와 사회과학 특강 시리즈 · 2026년 1학기", tag: "AI 특강", no: "6회",
    date: "2026-05-15", time: "10:00–12:00", title: "Allies Divided by Interests: The Political Origins of AI Technology Spillovers in International Trade",
    speaker: "박소준", affil: "MIT", venue: "Zoom", mode: "온라인",
    poster: "assets/img/lecture_2026s_06_park.jpg" },
  { id: "ai-2026s-07", cat: "lecture", series: "AI와 사회과학 특강 시리즈 · 2026년 1학기", tag: "AI 특강", no: "7회",
    date: "2026-05-22", time: "10:00–12:00", title: "인공지능 시대, 하지 말아야 할 연구, 잘 할 수 있게 된 연구",
    speaker: "김재연", affil: "UNC Chapel Hill", venue: "Zoom", mode: "온라인",
    poster: "assets/img/lecture_2026s_07_kim.jpg" },
  { id: "ai-2026s-08", cat: "lecture", series: "AI와 사회과학 특강 시리즈 · 2026년 1학기", tag: "AI 특강", no: "8–9회",
    date: "2026-05-29", dateEnd: "2026-06-05", time: "10:00–12:00", title: "AI and Experiment I & II",
    speaker: "Charles Crabtree", affil: "Monash University", venue: "Zoom", mode: "온라인",
    poster: "assets/img/lecture_2026s_08_crabtree.jpg" },
  { id: "ai-2026s-sp", cat: "lecture", series: "AI와 사회과학 특강 시리즈 · 2026년 1학기", tag: "AI 특강", no: "특별 세션",
    date: "2026-07-13", time: "13:00", title: "How can we utilize LLMs for research?",
    speaker: "임성빈", affil: "고려대학교 통계학과", venue: "정경관 619호(오준문홀)", mode: "대면",
    poster: "assets/img/lecture_2026s_special_lim.jpg",
    summary: "대한민국의 인구통계학적·지리적·문화적 특성을 정밀하게 반영한 합성 데이터셋인 페르소나 데이터를 소개하고, LLM 활용 방법과 한계점을 다룬 강연." },

  // ───────── AI Literacy for Social Scientists (2026년 2학기) ─────────
  { id: "ail-2026f-01", cat: "lecture", series: "AI Literacy for Social Scientists · 2026년 2학기", tag: "AI 특강", no: "1회",
    date: "2026-09-18", time: "13:30–15:30",
    title: "Rethinking the Research Process: How AI Is Changing Research for Students and Professors",
    speaker: "Steven Denney", affil: "Leiden University", venue: "Zoom", mode: "온라인",
    videoSoon: true, thumb: "assets/img/video_ail_01_denney.jpg",
    poster: "assets/img/lecture_ail_01_denney.jpg",
    summary: "AI를 연구 과정에 도입할 때의 판단 기준과 인용·출처·수치 검증 절차를 실제 연구 사례로 시연. 고려대 20여 개 학과와 Leiden University 등에서 62명 참석." },
  { id: "ail-2026f-02", cat: "lecture", series: "AI Literacy for Social Scientists · 2026년 2학기", tag: "AI 특강", no: "2회",
    date: "2026-10-16", time: "15:00–17:00", title: "AI의 머릿속 지도 읽기: 임베딩 벡터에서 기계적 해석가능성까지",
    speaker: "박재혁", affil: "KDI국제정책대학원", venue: "미래관 4005호", mode: "대면",
    poster: "assets/img/lecture_ail_02_park.jpg" },
  { id: "ail-2026f-03", cat: "lecture", series: "AI Literacy for Social Scientists · 2026년 2학기", tag: "AI 특강", no: "3회",
    date: "2026-11-13", time: "09:30–11:30",
    title: "Uncovering the Unseen: AI and Machine Learning in Politics, Communication, and Cognitive Science",
    speaker: "Seo Eun “Sunny” Yang", affil: "Northeastern University", venue: "Zoom", mode: "온라인",
    videoSoon: true, thumb: "assets/img/video_ail_03_yang.jpg",
    poster: "assets/img/lecture_ail_03_yang.jpg",
    summary: "네트워크 모형, 멀티모달 AI, 시선 추적·VR·fMRI 연구 사례로 직접 관찰하기 어려운 정치·사회 현상의 구조를 AI와 기계학습으로 드러내는 방법을 소개." },
  { id: "ail-2026f-04", cat: "lecture", series: "AI Literacy for Social Scientists · 2026년 2학기", tag: "AI 특강", no: "4회",
    date: "2026-12-11", time: "16:00–18:00", title: "",
    speaker: "Byungkyu Lee", affil: "New York University", venue: "상남정경관 619호", mode: "대면",
    poster: "assets/img/lecture_ail_series.jpg" },

  // ───────── 방법론 워크숍 ─────────
  { id: "mw-2027w", cat: "workshop", series: "방법론 워크숍", tag: "방법론 워크숍", no: "2027 겨울",
    date: "2027-01-07", time: "10:00–16:00",
    title: "Coding with Agentic AI: 2027 방법론 겨울 워크숍",
    venue: "추후 공지", mode: "대면",
    poster: "assets/img/workshop_2027w.jpg",
    summary: "정치학 데이터 분석 과제를 R로 직접 코딩한 뒤, 같은 과제를 AI 에이전트로 다시 코딩해 비교하는 하루 워크숍." },
  { id: "mw-2026w", cat: "workshop", series: "방법론 워크숍", tag: "방법론 워크숍", no: "2026 겨울",
    date: "2026-01-12", dateEnd: "2026-01-22",
    title: "프로그래밍, 데이터, LLM, 텍스트 분석",
    venue: "정경관 113호", mode: "대면·온라인",
    poster: "assets/img/workshop_2026w.jpg",
    summary: "프로그래밍 기초부터 LLM·텍스트 분석 기법까지, 정치학 연구에 필수적인 방법론을 집중적으로 익히는 방학 워크숍.",
    body: `
      <h4>Part 1. 정치학연구를 위한 데이터과학 (Stata 기반)</h4>
      <p class="who">강사: 길정아 (고려대학교) · 1월 12일–15일</p>
      <table>
        <tr><td>Day 1</td><td>다중회귀분석</td></tr>
        <tr><td>Day 2</td><td>범주형 독립변수</td></tr>
        <tr><td>Day 3</td><td>상호작용효과</td></tr>
        <tr><td>Day 4</td><td>로짓·프로빗</td></tr>
      </table>
      <h4>Part 2. Gen AI, LLM, Text Analysis</h4>
      <table>
        <tr><td>Day 1 · 1월 20일</td><td><b>Gen AI &amp; Visualization</b> — 이준호 (고려대학교)<br>Colab 기반 Gen AI 활용 실습 / 효과적인 데이터 시각화 기법</td></tr>
        <tr><td>Day 2 · 1월 21일</td><td><b>LLM 활용 실습 (온라인)</b> — 김도원 (University of Maryland)<br>LLM의 이해와 비동기적 활용 (Annotation 및 Silicon Sample) / LLM의 동기적 활용 (Qualtrics 설문 환경 연동 및 상호작용 설계)</td></tr>
        <tr><td>Day 3 · 1월 22일</td><td><b>Machine Learning and Text Analysis</b> — 김태균 (KAIST)<br>텍스트 분석 기초 / 텍스트 분석 응용과 실제</td></tr>
      </table>` },
  { id: "mw-2026s", cat: "workshop", series: "방법론 워크숍", tag: "방법론 워크숍", no: "2026 여름",
    date: "2026-06-29", dateEnd: "2026-07-08",
    title: "AI 시대, 정치학 연구의 첨단을 경험하다",
    venue: "정경관", mode: "대면",
    poster: "assets/img/workshop_2026s.jpg",
    summary: "R 기반 데이터과학 캠프(4일)와 Gen AI·LLM·텍스트 분석 워크숍(3일)으로 구성된 여름 집중 과정.",
    body: `
      <h4>Part 1. 방법론 캠프: 정치학연구를 위한 데이터과학 (R 기반)</h4>
      <p class="who">강사: 송승호 (Vanderbilt University) · 6월 29일–7월 2일</p>
      <table>
        <tr><td>Day 1</td><td>R 시작하기</td></tr>
        <tr><td>Day 2</td><td>R을 활용한 데이터 시각화</td></tr>
        <tr><td>Day 3</td><td>회귀분석 입문</td></tr>
        <tr><td>Day 4</td><td>회귀분석 심화</td></tr>
      </table>
      <h4>Part 2. 방법론 워크숍: Gen AI, LLM, Text Analysis</h4>
      <table>
        <tr><td>Day 1 · 7월 6일</td><td><b>Gen AI &amp; Visualization</b> — 이준호 (고려대학교)<br>Colab 기반 Gen AI 활용 실습 / 효과적인 데이터 시각화 기법</td></tr>
        <tr><td>Day 2 · 7월 7일</td><td><b>LLM 활용 실습</b> — 유제웅 (서울대학교)<br>OpenAI를 활용한 정치학 연구 / 실습</td></tr>
        <tr><td>Day 3 · 7월 8일</td><td><b>Text Analysis</b> — 정서우 (Columbia University)<br>텍스트 분석 기초 / 텍스트 분석 응용과 실제</td></tr>
      </table>` },

  // ───────── 포스터페어·연구 지원 ─────────
  { id: "pf-2026s", cat: "research", series: "포스터페어", tag: "포스터페어", no: "2026 1학기",
    date: "2026-06-12", time: "14:00–16:25", title: "2026 1학기 정치외교학과 대학원 포스터페어",
    venue: "상남정경관 619호", mode: "대면", count: 22,
    poster: "assets/img/posterfair_2026s_program.jpg",
    summary: "대학원생이 진행 중인 연구를 포스터로 발표하고 교수진·동료의 피드백을 받는 자리. 3개 세션, 22편 발표.",
    body: `
      <h4>Session 1</h4>
      <table>
        <tr><td>YU CHENGZHI</td><td>권위주의 국가 LLM의 정치적 편향 분석</td></tr>
        <tr><td>고영민</td><td>Nationalism and AI Policy Adoption</td></tr>
        <tr><td>김서현</td><td>Persona AI and Perspective-giving Effect</td></tr>
        <tr><td>김태정</td><td>권위주의 하에서의 비폭력저항운동 프레이밍</td></tr>
        <tr><td>박창은</td><td>국가 간 AI 통제 레짐 선호와 안보 딜레마</td></tr>
        <tr><td>정의서</td><td>Who Should Pay for AI? Job Replacement Threat and the Politics of Burden Allocation</td></tr>
        <tr><td>정종락</td><td>KoDEBATE: A Korean-Specialized Language Model for Political Science</td></tr>
        <tr><td>홍채영</td><td>중국의 대외 AI 거버넌스 담론의 형성과 변화</td></tr>
      </table>
      <h4>Session 2</h4>
      <table>
        <tr><td>김동욱</td><td>Out of Tune in an Authoritarian Legislature: Ruling Party–Opposition Rhetorical Divergence in Pre-Yushin South Korea</td></tr>
        <tr><td>김수민</td><td>Political Discourse Framing Divergence in South Korea (2004–2022)</td></tr>
        <tr><td>이승은</td><td>청원 데이터 분석</td></tr>
        <tr><td>이시욱, 이주혁</td><td>When Positivity Bias Fails: Judicial Consensus, Partisan Criticism, and the Boundaries of Constitutional Court Legitimacy in South Korea</td></tr>
        <tr><td>이은수</td><td>일본의 지역구 승계형 정치 세습은 선거 민주주의를 유의미하게 약화시키는가?</td></tr>
        <tr><td>이준호</td><td>정치 담론은 왜 적대적으로 들리는가: 정서적 양극화 인식의 담론적 조건</td></tr>
        <tr><td>최유나</td><td>대통령 SNS 담화는 제도적 지위와 국회 구도에 따라 달라지는가?</td></tr>
      </table>
      <h4>Session 3</h4>
      <table>
        <tr><td>고은별</td><td>When Do Target States Resist? Sectoral Concentration and Official Discourse under Chinese Economic Coercion</td></tr>
        <tr><td>YU CHENGZHI, 고영민</td><td>Everlasting Hatred? Improving Mutual Attitudes between the South Korean and Chinese Publics: Evidence from Survey Experiment</td></tr>
        <tr><td>이채민</td><td>China's Outward FDI toward Strategic Mineral-Holding Countries</td></tr>
        <tr><td>이윤정, 이도안</td><td>Climate Naming and Shaming and Domestic Public Opinion: Experimental Evidence from South Korea</td></tr>
        <tr><td>이도안, 이윤정</td><td>Trade Impact of Foreign Environmental Policy and Public Support for Domestic Environmental Regulation</td></tr>
        <tr><td>이화경</td><td>Patron Threat Language and Threat Credibility in Asymmetric Alliances</td></tr>
        <tr><td>원우형, 이다민, 이화경</td><td>Boundary-Making and Hierarchical Inclusion: Naturalization Regimes in South Korea and Taiwan</td></tr>
      </table>` },
  { id: "pf-2026f", cat: "research", series: "포스터페어", tag: "포스터페어", no: "2026 2학기",
    date: "2026-12-11", time: "11:30–15:30", title: "2026 2학기 사회학과 × 정치외교학과 대학원 공동 포스터페어",
    venue: "장소 추후 공지", mode: "대면",
    poster: "assets/img/posterfair_2026f.jpg",
    summary: "사회학과와 정치외교학과 대학원이 함께 여는 포스터페어. 개인 연구와 대학원생 간 공동 연구 모두 참여 가능. 최우수 2팀(각 50만원), 우수 2팀(각 30만원) 시상." },
  { id: "hbl-2026-01", cat: "research", series: "Half-baked Lunch Workshop", tag: "워크숍", no: "1회",
    date: "2026-05-15", time: "12:30", title: "Half-baked Lunch Workshop 1회",
    venue: "SK미래관 311호", mode: "대면", poster: "assets/img/research_halfbaked_01.jpg",
    summary: "아직 설익은 연구를 들고 와 샌드위치를 먹으며 교수·대학원 동료와 이야기를 나누는 Research-in-Progress 세미나." },
  { id: "hbl-2026-02", cat: "research", series: "Half-baked Lunch Workshop", tag: "워크숍", no: "2회",
    date: "2026-06-19", time: "12:30", title: "Half-baked Lunch Workshop 2회",
    venue: "정경관 619호(오준문홀)", mode: "대면", poster: "assets/img/research_halfbaked_02.jpg" },
  { id: "hbl-2026-03", cat: "research", series: "Half-baked Lunch Workshop", tag: "워크숍", no: "3회",
    date: "2026-12-04", time: "12:30", title: "Half-baked Lunch Workshop 3회",
    venue: "SK미래관 312호", mode: "대면", poster: "assets/img/research_halfbaked_03.jpg" },
  { id: "grant-2026f", cat: "research", series: "연구 지원", tag: "연구 지원", no: "2026 2학기",
    date: "2026-09-18", title: "Graduate Research Grant: 2026년 2학기",
    poster: "assets/img/grant_2026f.jpg" },
  { id: "grant-2026", cat: "research", series: "연구 지원", tag: "연구 지원", no: "2026 1학기",
    date: "2026-04-27", title: "Graduate Research Grant: 2026년 1학기",
    poster: "assets/img/grant_2026s.jpg",
    summary: "대학원생의 독립적 연구 수행을 지원하는 프로그램. 대학원생 간 공동 연구도 지원하며, 선정된 연구는 학과 세미나에서 결과를 발표합니다.",
    body: `
      <table>
        <tr><td>Mini Grant</td><td>최대 50만원 — AI 도구 사용료 (AI 구독료, API 호출, 클라우드 컴퓨팅 등)</td></tr>
        <tr><td>Standard Grant</td><td>최대 300만원 — 서베이, FGI, 실험, 데이터 구매 등 연구 수행 경비</td></tr>
        <tr><td>2026년 1학기</td><td>전반기 접수 마감 4월 27일 · 후반기 접수 마감 6월 30일</td></tr>
      </table>` },

  // ───────── 국제 교류 ─────────
  { id: "intl-climate-2026", cat: "intl", series: "다자 교류", tag: "다자 교류", no: "",
    date: "2026-07-06", dateEnd: "2026-07-10",
    partner: "Climate Corps", place: "29개국 49개 대학 · 서울",
    title: "Climate Corps Summer School 2026: Fostering Global Climate Innovation Leaders",
    hosts: "공동 주최: 고려대학교 지속가능원 · 고려대-KIST 에너지환경대학원 · 지속가능한 에너지·자원 기술-정책-데이터 융합 교육연구단 · 정치외교학과 · 보건환경융합과학부",
    poster: "assets/img/intl_climate_corps_2026.jpg", video: "qryhRXWVrC4", wide: true, hideHomeVideo: true,
    still: "assets/img/intl_climate_corps_2026_still.jpg",
    venue: "고려대학교 서울캠퍼스", mode: "대면",
    summary: "29개국 49개 대학의 학생·교수진 약 150명이 강연, 토론, 현장학습, 팀 프로젝트로 기후위기 대응을 함께 모색한 서머스쿨." },
  { id: "intl-pd-2025", cat: "intl", series: "국제 학술회의", tag: "국제 학술회의", no: "",
    date: "2025-09-26", dateEnd: "2025-09-27",
    partner: "Peace & Democracy", place: "학과 창립 80주년 기념 국제 학술회의 · 서울",
    title: "The Inaugural Conference on Peace and Democracy in Asia-Pacific and the World",
    poster: "assets/img/intl_peace_democracy_2025.jpg", video: "ZIsPfwKNgfw", wide: true,
    venue: "정경관 508호(천신일홀)", mode: "대면",
    summary: "학과 창립 80주년 기념 국제 학술회의. 주제: The Climate Challenge: Democracy, Governance, and Global Response. 기조연설 이회성 전 IPCC 의장." },
  { id: "intl-nus-2025", cat: "intl", series: "양자 교류", tag: "양자 교류", no: "",
    date: "2025-11-03", time: "14:00–17:50",
    partner: "KU × NUS", place: "싱가포르국립대학교 · 싱가포르",
    title: "Joint Faculty & Student Workshop",
    poster: "assets/img/intl_ku_nus_2025.jpg",
    photos: ["assets/img/intl_ku_nus_2025_photo1.jpg", "assets/img/intl_ku_nus_2025_photo2.jpg"],
    venue: "National University of Singapore", mode: "대면",
    summary: "고려대학교와 싱가포르국립대학교 대학원생·교수가 함께한 공동 워크숍. 양교 석사과정생 연구 발표와 토론." },
  { id: "intl-aiws-2026", cat: "intl", series: "국제 학술회의", tag: "국제 학술회의", no: "",
    date: "2026-02-03", time: "10:20–17:00",
    partner: "KU × NCCU × Waseda", place: "대만 국립정치대학교 · 와세다대학교 · 서울",
    headline: "AI and Social Science",
    title: "KU × NCCU × Waseda Joint Faculty Workshop",
    poster: "assets/img/intl_ku_nccu_waseda_2026.jpg",
    photos: ["assets/img/intl_ku_nccu_waseda_2026_photo1.jpg", "assets/img/intl_ku_nccu_waseda_2026_photo2.jpg"],
    venue: "상남정경관 609호", mode: "대면",
    summary: "고려대학교, 대만 국립정치대학교(NCCU), 와세다대학교 연구자가 AI와 사회과학을 주제로 연 공동 워크숍.",
    body: `
      <table>
        <tr><td>Session 1</td><td><b>AI, Information Environments, and Public Preferences</b><br>Yi-Chieh Lin (NCCU) · Sung Eun Kim (Korea University)</td></tr>
        <tr><td>Session 2</td><td><b>Generative AI, Knowledge Production, and Misinformation</b><br>Mikihito Tanaka (Waseda University) · Trisha T. C. Lin (NCCU)</td></tr>
        <tr><td>Session 3</td><td><b>Experimental Studies using Generative AI</b><br>Tetsuro Kobayashi (Waseda University) · Woo Chang Kang (Korea University)</td></tr>
      </table>` },
  { id: "intl-waseda-2026", cat: "intl", series: "양자 교류", tag: "양자 교류", no: "",
    date: "2026-02-04", dateEnd: "2026-02-05",
    partner: "KU × Waseda", place: "와세다대학교 · 서울",
    title: "Graduate Student Workshop: Migration, Public Opinion, and the Politics of Information",
    venue: "상남정경관 508호·619호", mode: "대면",
    poster: "assets/img/intl_ku_waseda_2026.jpg",
    summary: "고려대학교·와세다대학교·연세대학교 대학원생이 6개 패널에서 연구를 발표한 이틀간의 대학원생 세미나." },
  { id: "intl-nccu-ssk-2026", cat: "intl", series: "양자 교류", tag: "양자 교류", no: "",
    date: "2026-04-09", time: "10:00–12:00",
    partner: "KU × NCCU", place: "대만 국립정치대학교 · 서울",
    title: "Graduate Student Workshop: Democracy and Taiwanese Politics in the Era of Political Polarization",
    venue: "상남정경관 326호", mode: "대면",
    poster: "assets/img/intl_nccu_ssk_2026.jpg",
    summary: "대만 국립정치대학교(NCCU) 정치학과 대학원생 4인이 발표하고, 고려대학교 교수진과 대학원생이 토론자로 참여한 국제 워크숍." },
  { id: "intl-monash-2026", cat: "intl", series: "양자 교류", tag: "양자 교류", no: "",
    date: "2026-08-10", time: "10:00–12:00",
    partner: "KU × Monash", place: "모나쉬대학교 · 온라인",
    title: "Graduate Student Workshop",
    venue: "Zoom", mode: "온라인",
    poster: "assets/img/intl_ku_monash_2026.jpg",
    body: `
      <table>
        <tr><td>발표 1</td><td><b>National Narratives and Middle Power</b><br>Yungeol Lee (Korea University) · 토론 Charles Crabtree (Monash University)</td></tr>
        <tr><td>발표 2</td><td><b>Humanitarian Aid and the Logic of Genocide</b><br>Cat Maclean (Monash University) · 토론 Eunbyeol Ko (Korea University)</td></tr>
      </table>` },
  { id: "intl-nccu-2026", cat: "intl", series: "양자 교류", tag: "양자 교류", no: "",
    date: "2026-10-30",
    partner: "KU × NCCU", place: "대만 국립정치대학교 · 타이베이",
    title: "Graduate Student Workshop",
    poster: "assets/img/intl_ku_nccu_2026.jpg",
    photos: ["assets/img/intl_ku_nccu_2026_photo1.jpg", "assets/img/intl_ku_nccu_2026_photo2.jpg"],
    venue: "National Chengchi University, Taipei", mode: "대면",
    summary: "고려대학교–대만 국립정치대학교 공동 대학원생 워크숍. 선발된 박사과정 2인, 석사과정 2인이 참가." },

  // ───────── 진로 ─────────
  { id: "career-pdday-2026", cat: "career", series: "Professional Development", tag: "커리어 데이", no: "",
    date: "2026-02-06", time: "15:00–18:00", title: "Graduate Professional Development Day: 2026 겨울",
    venue: "상남정경관 113호", mode: "대면",
    poster: "assets/img/career_pdday_2026.jpg",
    summary: "학술지 논문 투고 전략부터 학계 취업 시장, 학계 밖 진로까지, 각 분야 전문가가 대학원 생활과 졸업 후 진로에 필요한 조언을 나눈 자리.",
    body: `
      <table>
        <tr><td>Session 1</td><td><b>학술지 논문 투고 전략</b> — 김남규 (고려대학교)</td></tr>
        <tr><td>Session 2</td><td><b>학계 취업 시장 준비</b> — 한강욱 (고려대학교), 백선우 (국가안보전략연구원)</td></tr>
        <tr><td>Session 3</td><td><b>학계 밖 진로 탐색</b> — 정한울 (한국사람연구원), 이준호 (에스티아이)</td></tr>
        <tr><td>마무리</td><td>그룹 멘토링</td></tr>
      </table>` },
  { id: "career-pdday-2026s", cat: "career", series: "Professional Development", tag: "커리어 데이", no: "",
    date: "2026-08-07", time: "15:00–17:50", title: "Graduate Professional Development Day: 2026 여름",
    venue: "상남정경관 101호", mode: "대면",
    poster: "assets/img/career_pdday_2026s.jpg",
    body: `
      <table>
        <tr><td>Session 1</td><td><b>Soft-Landing Program: 생존가이드 워크숍</b> — 김지연 (박사과정), 원우형 (석사과정), 채승병 (석사과정)</td></tr>
        <tr><td>Session 2</td><td><b>학계로 나아갈 준비 하기: 박사학위 취득 이후의 학계 진로와 전임교원 준비 전략</b> — 차현진 (한국교통대학교)</td></tr>
        <tr><td>Session 3</td><td><b>학계 밖 진로 탐색: 기업에도 정치가 필요할까?</b> — 김항기 (야놀자)</td></tr>
      </table>` },
  { id: "compass-2026-01", cat: "career", series: "Scholar's Compass · 연구자의 길에서 방향을 잡아가는 이야기", tag: "Scholar's Compass", no: "Leading",
    date: "2026-07-20", time: "16:00–17:15", title: "Leading Scholar's Compass: Political Scientist as a Career",
    speaker: "김인송", affil: "MIT 정치학과", venue: "정경관 619호(오준문홀)", mode: "대면",
    poster: "assets/img/career_compass_2026.jpg" },
  { id: "compass-2026-02", cat: "career", series: "Scholar's Compass · 연구자의 길에서 방향을 잡아가는 이야기", tag: "Scholar's Compass", no: "Emerging",
    date: "2026-07-23", time: "10:30", title: "Emerging Scholar's Compass",
    speaker: "김윤의", affil: "Texas Tech University 정치학과", venue: "정경관 113호", mode: "대면",
    poster: "assets/img/career_compass_2026.jpg" },
  { id: "career-table-01", cat: "career", series: "Career Table · AI 대전환 시대 사회과학자의 길을 묻다", tag: "커리어 테이블", no: "Talk 01",
    date: "2026-10-28", time: "17:00–19:00", title: "사회과학 훈련은 어디에 쓸모가 있는가?",
    speaker: "고승연", affil: "LG경영연구원 연구위원", venue: "상남정경관 508호", mode: "대면",
    poster: "assets/img/career_table_01_ko.jpg",
    summary: "언론과 기업연구소를 거친 선거·여론·정책 연구 20년. 역사·제도·맥락에 대한 이해와 방법론을 균형 있게 다루는 능력이 사회과학 훈련의 고유한 가치임을 설명하고, AI 시대 기업이 요구하는 사회과학 전공자의 역량과 진로를 제시." },
  { id: "career-table-02", cat: "career", series: "Career Table · AI 대전환 시대 사회과학자의 길을 묻다", tag: "커리어 테이블", no: "Talk 02",
    date: "2026-11-06", time: "12:00–14:00", title: "안보 정책의 최전선, 사회과학의 자리는?",
    speaker: "전경주", affil: "아산정책연구원 연구위원", venue: "상남정경관 113호", mode: "대면",
    poster: "assets/img/career_table_02_jeon.jpg",
    summary: "국책·민간연구기관 안보·국방전략 연구 18년. 학술논문과 정책논문의 차이, 연구 과정의 각 단계에서 AI가 돕는 일과 연구자에게 남는 일을 실제 사례로 소개." }
];

// 시리즈 제목 옆에 작게 붙는 설명 (공동 주최 등). 키는 위 series 값과 똑같이 적습니다.
window.SERIES_NOTES = {
  "AI Literacy for Social Scientists · 2026년 2학기": "공동 주최: 대학원혁신본부 · 4단계 BK21 사회학교육연구팀"
};
