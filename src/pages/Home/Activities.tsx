import { useState } from "react";

type Curriculum = {
  period: string;
  subject: string;
  outcome: string;
};

type Bootcamp = {
  slug: string;
  name: string;
  level: "입문" | "기초";
  headline: string;
  description: string;
  recommendation: string;
  sampleLabel: string;
  sample: string;
  curriculum: Curriculum[];
};

const BOOTCAMPS: Bootcamp[] = [
  {
    slug: "python",
    name: "Python",
    level: "입문",
    headline: "처음이어도, 직접 움직이는 코드를 만듭니다.",
    description:
      "문법을 외우는 데서 멈추지 않고 작은 자동화와 데이터 프로젝트를 완성합니다.",
    recommendation: "프로그래밍을 처음 시작하는 사람에게 권해요.",
    sampleLabel: "PYTHON",
    sample: `def grow(together=True):
    if together:
        return "farther, faster"

print(grow())`,
    curriculum: [
      { period: "01—02", subject: "변수, 조건문, 반복문", outcome: "코드와 친해지기" },
      { period: "03—04", subject: "함수와 자료구조", outcome: "생각을 코드로 나누기" },
      { period: "05—06", subject: "파일과 데이터 다루기", outcome: "데이터 읽고 정리하기" },
      { period: "07—08", subject: "API와 간단한 자동화", outcome: "반복 작업 줄이기" },
      { period: "09—10", subject: "미니 프로젝트 설계", outcome: "아이디어 구체화하기" },
      { period: "11—12", subject: "프로젝트 완성 및 데모", outcome: "결과를 공유하기" },
    ],
  },
  {
    slug: "c",
    name: "C",
    level: "입문",
    headline: "컴퓨터가 코드를 이해하는 방식을 배웁니다.",
    description:
      "메모리와 포인터까지 차근차근 짚으며 프로그래밍의 단단한 기초를 만듭니다.",
    recommendation: "전공 수업과 알고리즘의 기초를 다지고 싶은 사람에게 권해요.",
    sampleLabel: "C",
    sample: `#include <stdio.h>

int main(void) {
    printf("hello, haedal\\n");
    return 0;
}`,
    curriculum: [
      { period: "01—02", subject: "컴파일과 기본 문법", outcome: "첫 프로그램 실행하기" },
      { period: "03—04", subject: "조건문과 반복문", outcome: "실행 흐름 제어하기" },
      { period: "05—06", subject: "배열과 문자열", outcome: "연속된 데이터 다루기" },
      { period: "07—08", subject: "함수와 포인터", outcome: "메모리 이해하기" },
      { period: "09—10", subject: "구조체와 동적 메모리", outcome: "데이터 구조 설계하기" },
      { period: "11—12", subject: "콘솔 프로젝트 완성", outcome: "프로그램 시연하기" },
    ],
  },
  {
    slug: "web",
    name: "Web Frontend",
    level: "입문",
    headline: "아이디어를 누구나 만질 수 있는 화면으로 만듭니다.",
    description:
      "HTML과 CSS부터 React까지, 직접 설계하고 배포하는 웹 프로젝트를 경험합니다.",
    recommendation: "눈에 보이는 결과물을 빠르게 만들고 싶은 사람에게 권해요.",
    sampleLabel: "JAVASCRIPT",
    sample: `function Hello() {
  return (
    <main>
      <h1>Build what matters.</h1>
    </main>
  );
}`,
    curriculum: [
      { period: "01—02", subject: "HTML과 시맨틱 웹", outcome: "화면의 뼈대 만들기" },
      { period: "03—04", subject: "CSS 레이아웃과 반응형", outcome: "어디서나 잘 보이게 하기" },
      { period: "05—06", subject: "JavaScript 핵심 문법", outcome: "화면에 동작 더하기" },
      { period: "07—08", subject: "React 컴포넌트와 상태", outcome: "UI를 구조화하기" },
      { period: "09—10", subject: "API 연결과 팀 개발", outcome: "데이터와 화면 연결하기" },
      { period: "11—12", subject: "웹 서비스 배포 및 데모", outcome: "서비스 공개하기" },
    ],
  },
  {
    slug: "spring",
    name: "Spring",
    level: "기초",
    headline: "서비스의 보이지 않는 중심을 설계합니다.",
    description:
      "Java와 Spring Boot로 요청과 데이터를 다루며 안정적인 백엔드 API를 만듭니다.",
    recommendation: "Java 기초를 알고 실제 서버를 만들어 보고 싶은 사람에게 권해요.",
    sampleLabel: "JAVA",
    sample: `@GetMapping("/members/{id}")
public Member find(@PathVariable Long id) {
    return memberService.findById(id);
}`,
    curriculum: [
      { period: "01—02", subject: "Java 객체지향 복습", outcome: "역할과 책임 나누기" },
      { period: "03—04", subject: "Spring Boot와 HTTP", outcome: "요청과 응답 이해하기" },
      { period: "05—06", subject: "REST API 설계", outcome: "일관된 API 만들기" },
      { period: "07—08", subject: "JPA와 데이터베이스", outcome: "데이터 저장하기" },
      { period: "09—10", subject: "인증과 예외 처리", outcome: "안전한 서비스 만들기" },
      { period: "11—12", subject: "백엔드 서비스 배포", outcome: "서버 운영 경험하기" },
    ],
  },
  {
    slug: "ai",
    name: "AI",
    level: "기초",
    headline: "데이터 속 패턴을 찾아 쓸모 있는 모델로 연결합니다.",
    description:
      "데이터 전처리부터 모델 학습과 평가까지, 작은 문제를 끝까지 해결해 봅니다.",
    recommendation: "Python 기초를 알고 AI 프로젝트의 전체 흐름이 궁금한 사람에게 권해요.",
    sampleLabel: "PYTHON",
    sample: `model.fit(train_x, train_y)
score = model.evaluate(test_x, test_y)

print(f"accuracy: {score:.2%}")`,
    curriculum: [
      { period: "01—02", subject: "NumPy와 데이터 다루기", outcome: "데이터 읽고 살피기" },
      { period: "03—04", subject: "시각화와 전처리", outcome: "데이터를 설명하기" },
      { period: "05—06", subject: "머신러닝의 기본 원리", outcome: "학습 과정 이해하기" },
      { period: "07—08", subject: "모델 학습과 평가", outcome: "성능 비교하기" },
      { period: "09—10", subject: "프로젝트 실험과 개선", outcome: "가설 검증하기" },
      { period: "11—12", subject: "결과 공유 및 데모", outcome: "인사이트 전달하기" },
    ],
  },
];

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function Activities() {
  const [activeSlug, setActiveSlug] = useState(BOOTCAMPS[0].slug);
  const activeIndex = BOOTCAMPS.findIndex(
    (bootcamp) => bootcamp.slug === activeSlug,
  );
  const currentIndex = activeIndex < 0 ? 0 : activeIndex;
  const activeBootcamp = BOOTCAMPS[currentIndex];

  return (
    <section className="activities" aria-labelledby="activities-title">
      <div className="activities__inner">
        <header className="activities__masthead">
          <p className="activities__eyebrow">
            2026—2 · {BOOTCAMPS.length} BOOTCAMPS
          </p>
          <h2 id="activities-title" className="activities__title">
            <span>한 학기,</span>
            <span className="activities__titleLine">
              <em>12주면</em> 우리는 만듭니다.
            </span>
          </h2>
          <p className="activities__introduction">
            매주 모여서 배우고, 막히면 같이 풉니다.
            <br />
            관심 가는 부트캠프를 골라보세요.
          </p>
        </header>

        <div className="activities__catalog">
          <nav className="activities__directory" aria-label="부트캠프 선택">
            <p className="activities__label">BOOTCAMPS</p>
            <ol className="activities__tabs">
              {BOOTCAMPS.map((bootcamp, index) => {
                const isActive = index === currentIndex;

                return (
                  <li key={bootcamp.slug}>
                    <button
                      type="button"
                      className={`activities__tab${isActive ? " is-active" : ""}`}
                      aria-pressed={isActive}
                      aria-controls="activities-panel"
                      onClick={() => setActiveSlug(bootcamp.slug)}
                    >
                      <span className="activities__tabNumber">
                        {formatIndex(index)}
                      </span>
                      <span className="activities__tabName">{bootcamp.name}</span>
                      <span className="activities__availability" aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
            </ol>
            <p className="activities__legend">
              <span aria-hidden="true" />
              신청 가능
            </p>
          </nav>

          <article
            id="activities-panel"
            className="activities__panel"
            aria-live="polite"
            aria-labelledby="activities-current-title"
          >
            <header className="activities__panelHeader">
              <div>
                <div className="activities__nameLine">
                  <h3 id="activities-current-title">{activeBootcamp.name}</h3>
                  <span>{activeBootcamp.level}</span>
                </div>
                <p className="activities__headline">{activeBootcamp.headline}</p>
                <p className="activities__description">
                  {activeBootcamp.description}
                </p>
              </div>
              <p className="activities__count" aria-hidden="true">
                {formatIndex(currentIndex)}
                <span>/ {String(BOOTCAMPS.length).padStart(2, "0")}</span>
              </p>
            </header>

            <figure
              className="activities__sample"
              aria-label={`${activeBootcamp.name} 예제 코드`}
            >
              <figcaption>SAMPLE — {activeBootcamp.sampleLabel}</figcaption>
              <pre>
                <code>{activeBootcamp.sample}</code>
              </pre>
            </figure>

            <p className="activities__recommendation">
              {activeBootcamp.recommendation}
            </p>

            <section
              className="activities__curriculum"
              aria-labelledby="activities-curriculum-title"
            >
              <header className="activities__curriculumHeader">
                <h4 id="activities-curriculum-title">CURRICULUM</h4>
                <p>12 WEEKS</p>
              </header>
              <ol>
                {activeBootcamp.curriculum.map((item) => (
                  <li key={`${activeBootcamp.slug}-${item.period}`}>
                    <span className="activities__period">{item.period}</span>
                    <strong>{item.subject}</strong>
                    <span className="activities__outcome">{item.outcome}</span>
                  </li>
                ))}
              </ol>
            </section>
          </article>
        </div>
      </div>

      <style>{`
        .activities {
          box-sizing: border-box;
          min-height: 100vh;
          min-height: 100svh;
          margin: 0;
          padding: clamp(2.5rem, 5vh, 4rem) 0 clamp(4rem, 7vh, 6rem);
          border-top: 4px solid #858887;
          background: #f4f5f2;
          color: #11171c;
          font-family: Pretendard, "Noto Sans KR", "Apple SD Gothic Neo",
            Arial, Helvetica, sans-serif;
        }

        .activities *,
        .activities *::before,
        .activities *::after {
          box-sizing: border-box;
        }

        .activities__inner {
          width: min(
            calc(100% - var(--page-gutter) * 2),
            var(--content-max)
          );
          margin: 0 auto;
        }

        .activities__masthead {
          padding-bottom: clamp(2.5rem, 4.5vh, 3.5rem);
          border-bottom: 1px solid #ced2d0;
        }

        .activities__eyebrow,
        .activities__label,
        .activities__sample figcaption,
        .activities__curriculumHeader {
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(0.625rem, 0.55rem + 0.15vw, 0.75rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.15em;
        }

        .activities__eyebrow {
          margin: 0 0 clamp(1rem, 1.3vw, 1.5rem);
          color: #808786;
        }

        .activities__title {
          margin: 0;
          font-size: clamp(4rem, 4.5vw, 5.5rem);
          font-weight: 750;
          line-height: 0.94;
          letter-spacing: -0.074em;
          word-break: keep-all;
        }

        .activities__title > span {
          display: block;
        }

        .activities__titleLine {
          white-space: nowrap;
        }

        .activities__title em {
          color: #535e63;
          font-style: normal;
        }

        .activities__introduction {
          margin: clamp(1.25rem, 1.5vw, 1.75rem) 0 0;
          color: #61696a;
          font-size: clamp(0.9375rem, 0.82rem + 0.25vw, 1.125rem);
          line-height: 1.6;
          letter-spacing: -0.025em;
        }

        .activities__catalog {
          display: grid;
          grid-template-columns: clamp(13rem, 14vw, 17rem) minmax(0, 1fr);
          gap: clamp(3rem, 5vw, 6rem);
          padding-top: clamp(2.5rem, 4vh, 3.5rem);
        }

        .activities__label {
          margin: 0 0 clamp(1rem, 1.25vw, 1.375rem);
          color: #969c9b;
        }

        .activities__tabs {
          margin: 0;
          padding: 0;
          border-bottom: 1px solid #cbd0cd;
          list-style: none;
        }

        .activities__tab {
          position: relative;
          display: grid;
          grid-template-columns: 2.5rem minmax(0, 1fr) 0.375rem;
          gap: 0.625rem;
          align-items: center;
          width: 100%;
          height: clamp(3rem, 3.1vw, 3.5rem);
          padding: 0 clamp(0.75rem, 1vw, 1rem);
          border: 0;
          background: transparent;
          color: #707879;
          font: inherit;
          text-align: left;
          cursor: pointer;
          transition: background-color 160ms ease, color 160ms ease;
        }

        .activities__tab::before {
          position: absolute;
          inset: 0 auto 0 0;
          width: 2px;
          background: #11171c;
          content: "";
          opacity: 0;
          transition: opacity 160ms ease;
        }

        .activities__tab:hover {
          background: #e9ebe8;
          color: #11171c;
        }

        .activities__tab:focus-visible {
          outline: 2px solid #11171c;
          outline-offset: -2px;
        }

        .activities__tab.is-active {
          background: #dfe2df;
          color: #11171c;
        }

        .activities__tab.is-active::before {
          opacity: 1;
        }

        .activities__tabNumber {
          color: #a2a8a8;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(0.625rem, 0.6vw, 0.75rem);
          letter-spacing: 0.07em;
        }

        .activities__tabName {
          overflow: hidden;
          font-size: clamp(0.8125rem, 0.75vw, 0.9375rem);
          font-weight: 560;
          line-height: 1;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .activities__availability,
        .activities__legend > span {
          width: 0.3125rem;
          height: 0.3125rem;
          background: #737a79;
        }

        .activities__tab.is-active .activities__availability {
          background: #11171c;
        }

        .activities__legend {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 1rem 0 0 0.75rem;
          color: #8b9291;
          font-size: clamp(0.6875rem, 0.65vw, 0.8125rem);
          line-height: 1;
        }

        .activities__panel {
          min-width: 0;
        }

        .activities__panelHeader {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 2rem;
          min-height: clamp(10rem, 10vw, 12rem);
        }

        .activities__nameLine {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .activities__nameLine h3 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 2.6vw, 3.25rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.035em;
        }

        .activities__nameLine > span {
          padding: 0.3125rem 0.5rem 0.25rem;
          border-radius: 2px;
          background: #e2e4e1;
          color: #777f7f;
          font-size: clamp(0.6875rem, 0.65vw, 0.8125rem);
          font-weight: 700;
          line-height: 1;
        }

        .activities__headline {
          margin: 0.875rem 0 0;
          color: #30393d;
          font-size: clamp(1.375rem, 1.55vw, 2rem);
          font-weight: 620;
          line-height: 1.35;
          letter-spacing: -0.04em;
          word-break: keep-all;
        }

        .activities__description {
          max-width: 56rem;
          margin: 0.375rem 0 0;
          color: #707778;
          font-size: clamp(0.9375rem, 0.82rem + 0.2vw, 1.125rem);
          line-height: 1.55;
          letter-spacing: -0.02em;
          word-break: keep-all;
        }

        .activities__count {
          margin: 0.25rem 0 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(1.125rem, 1.1vw, 1.375rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .activities__count span {
          color: #a1a7a6;
          font-size: 0.6875rem;
        }

        .activities__sample {
          min-height: clamp(10.5rem, 9.5vw, 12rem);
          margin: 0;
          padding: clamp(1.25rem, 1.5vw, 1.75rem);
          overflow: hidden;
          border-radius: 6px;
          background: #12171d;
          color: #d7e1e6;
        }

        .activities__sample figcaption {
          margin: 0 0 clamp(1rem, 1.2vw, 1.375rem);
          color: #748089;
          font-size: clamp(0.625rem, 0.55rem + 0.12vw, 0.75rem);
        }

        .activities__sample pre {
          margin: 0;
          overflow-x: auto;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: clamp(0.8125rem, 0.75vw, 0.9375rem);
          line-height: 1.55;
          tab-size: 2;
        }

        .activities__sample code {
          font: inherit;
        }

        .activities__recommendation {
          margin: 0.875rem 0 clamp(2rem, 2.5vw, 2.75rem);
          color: #687173;
          font-size: clamp(0.8125rem, 0.72vw, 0.9375rem);
          line-height: 1.5;
          letter-spacing: -0.015em;
        }

        .activities__curriculumHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #cbd0cd;
          color: #969c9b;
          font-size: clamp(0.625rem, 0.55rem + 0.1vw, 0.75rem);
        }

        .activities__curriculumHeader h4,
        .activities__curriculumHeader p {
          margin: 0;
          font: inherit;
        }

        .activities__curriculum ol {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .activities__curriculum li {
          display: grid;
          grid-template-columns: 5rem minmax(18rem, 0.85fr) minmax(0, 1fr);
          gap: 1rem;
          align-items: center;
          min-height: clamp(3.25rem, 3vw, 3.75rem);
          border-bottom: 1px solid #d4d8d5;
          font-size: clamp(0.8125rem, 0.75vw, 0.9375rem);
        }

        .activities__curriculum strong {
          font-weight: 620;
        }

        .activities__period {
          color: #a1a7a6;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(0.625rem, 0.55rem + 0.08vw, 0.6875rem);
          letter-spacing: 0.08em;
        }

        .activities__outcome {
          color: #979d9c;
          font-size: clamp(0.75rem, 0.68vw, 0.875rem);
        }

        @media (max-width: 68.75rem) {
          .activities__title {
            font-size: clamp(3.5rem, 6vw, 4.25rem);
          }

          .activities__catalog {
            grid-template-columns: 11rem minmax(0, 1fr);
            gap: 2rem;
          }

          .activities__tab {
            height: 2.75rem;
          }

          .activities__panelHeader {
            min-height: 9.5rem;
          }

          .activities__sample {
            min-height: 10rem;
          }

          .activities__curriculum li {
            grid-template-columns: 4rem minmax(0, 1fr);
          }

          .activities__outcome {
            display: none;
          }
        }

        @media (max-width: 45rem) {
          .activities {
            padding-top: 2rem;
            padding-bottom: 3rem;
          }

          .activities__masthead {
            padding-bottom: 2rem;
          }

          .activities__title {
            font-size: clamp(2.5rem, 10.5vw, 3.375rem);
          }

          .activities__titleLine {
            white-space: normal;
          }

          .activities__introduction {
            font-size: 0.875rem;
          }

          .activities__catalog {
            display: block;
            padding-top: 1.75rem;
          }

          .activities__directory {
            margin-bottom: 2.25rem;
          }

          .activities__tabs {
            display: flex;
            gap: 0.5rem;
            overflow-x: auto;
            padding-bottom: 0.5rem;
            border: 0;
            scrollbar-width: none;
          }

          .activities__tabs::-webkit-scrollbar {
            display: none;
          }

          .activities__tabs li {
            flex: 0 0 auto;
          }

          .activities__tab {
            display: flex;
            gap: 0.5rem;
            width: auto;
            height: 2.75rem;
            padding: 0 0.875rem;
            border: 1px solid #d1d5d2;
          }

          .activities__tab::before,
          .activities__availability,
          .activities__legend {
            display: none;
          }

          .activities__tab.is-active {
            border-color: #11171c;
            background: #11171c;
            color: #f4f5f2;
          }

          .activities__panelHeader {
            min-height: 9.5rem;
          }

          .activities__headline {
            font-size: 1.25rem;
          }

          .activities__sample {
            min-height: 9.5rem;
            padding: 1.125rem;
          }
        }

        @media (max-width: 28.75rem) {
          .activities__title {
            font-size: clamp(2.25rem, 11vw, 2.875rem);
          }

          .activities__nameLine h3 {
            font-size: 2rem;
          }

          .activities__description {
            padding-right: 12px;
          }

          .activities__count {
            font-size: 0.875rem;
          }

          .activities__sample pre {
            font-size: 0.6875rem;
          }

          .activities__recommendation {
            margin-bottom: 1.5rem;
          }

          .activities__curriculum li {
            grid-template-columns: 3.5rem minmax(0, 1fr);
            min-height: 3rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .activities__tab {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
