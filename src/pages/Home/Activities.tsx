import { useState } from "react";
import { bootcamps } from "../../data/bootcamp.data";

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function Activities() {
  const [activeSlug, setActiveSlug] = useState(bootcamps[0].slug);
  const activeIndex = bootcamps.findIndex(
    (bootcamp) => bootcamp.slug === activeSlug,
  );
  const currentIndex = activeIndex < 0 ? 0 : activeIndex;
  const activeBootcamp = bootcamps[currentIndex];

  return (
    <section className="activities" aria-labelledby="activities-title">
      <div className="activities__inner">
        <header className="activities__masthead">
          <h2 id="activities-title" className="activities__title">
            <span>해달 그리고</span>
            <span className="activities__titleLine">
              <em>부트캠프</em>
            </span>
          </h2>
        </header>

        <div className="activities__catalog">
          <nav className="activities__directory" aria-label="부트캠프 선택">
            <ol className="activities__tabs">
              {bootcamps.map((bootcamp, index) => {
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
          </nav>

          <article
            key={activeBootcamp.slug}
            id="activities-panel"
            className="activities__panel"
            tabIndex={0}
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
              </div>
              <p className="activities__count" aria-hidden="true">
                {formatIndex(currentIndex)}
                <span>/ {String(bootcamps.length).padStart(2, "0")}</span>
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

            <section
              className="activities__curriculum"
              aria-labelledby="activities-curriculum-title"
            >
              <header className="activities__curriculumHeader">
                <h4 id="activities-curriculum-title">CURRICULUM</h4>
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
          font-family: var(--font-site);
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
          font-family: var(--font-site);
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
          grid-template-columns: clamp(24rem, 29vw, 32rem) minmax(0, 1fr);
          gap: clamp(3rem, 4vw, 5rem);
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
          grid-template-columns: 3.25rem minmax(0, 1fr) 0.5rem;
          gap: 0.75rem;
          align-items: center;
          width: 100%;
          height: clamp(4.5rem, 4.6vw, 5.25rem);
          padding: 0 clamp(1rem, 1.3vw, 1.375rem);
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
          width: 4px;
          background: #f4f5f2;
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
          background: #11171c;
          color: #f4f5f2;
        }

        .activities__tab.is-active::before {
          opacity: 1;
        }

        .activities__tabNumber {
          color: #a2a8a8;
          font-family: var(--font-site);
          font-size: clamp(0.6875rem, 0.62vw, 0.8125rem);
          letter-spacing: 0.07em;
        }

        .activities__tab.is-active .activities__tabNumber {
          color: #b9c0be;
        }

        .activities__tabName {
          overflow: hidden;
          font-size: clamp(1rem, 1vw, 1.25rem);
          font-weight: 560;
          line-height: 1;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .activities__tab.is-active .activities__tabName {
          font-weight: 700;
        }

        .activities__availability,
        .activities__legend > span {
          width: 0.375rem;
          height: 0.375rem;
          background: #737a79;
        }

        .activities__tab.is-active .activities__availability {
          width: 0.5rem;
          height: 0.5rem;
          background: #f4f5f2;
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
          height: clamp(34rem, 68vh, 46rem);
          height: clamp(34rem, 68svh, 46rem);
          min-width: 0;
          overflow-y: auto;
          overscroll-behavior-y: contain;
          scrollbar-color: #7e8583 transparent;
          scrollbar-gutter: stable;
          scrollbar-width: thin;
        }

        .activities__panel::-webkit-scrollbar {
          width: 6px;
        }

        .activities__panel::-webkit-scrollbar-track {
          background: transparent;
        }

        .activities__panel::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: #7e8583;
        }

        .activities__panel:focus-visible {
          outline: 2px solid #11171c;
          outline-offset: 3px;
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
          font-family: var(--font-site);
          font-size: clamp(3.25rem, 4.2vw, 4.75rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.035em;
        }

        .activities__nameLine > span {
          padding: 0.375rem 0.625rem 0.3125rem;
          border-radius: 2px;
          background: #e2e4e1;
          color: #777f7f;
          font-size: clamp(0.8125rem, 0.72vw, 0.9375rem);
          font-weight: 700;
          line-height: 1;
        }

        .activities__headline {
          margin: 1.125rem 0 0;
          color: #30393d;
          font-size: clamp(1.75rem, 2vw, 2.5rem);
          font-weight: 650;
          line-height: 1.25;
          letter-spacing: -0.04em;
          word-break: keep-all;
        }

        .activities__count {
          margin: 0.25rem 0 0;
          font-family: var(--font-site);
          font-size: clamp(1.5rem, 1.5vw, 2rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .activities__count span {
          color: #a1a7a6;
          font-size: 0.8125rem;
        }

        .activities__sample {
          min-height: clamp(12rem, 11vw, 14rem);
          margin: 0 0 clamp(2rem, 3vw, 3rem);
          padding: clamp(1.75rem, 2vw, 2.25rem);
          overflow: hidden;
          border-radius: 6px;
          background: #12171d;
          color: #d7e1e6;
        }

        .activities__sample figcaption {
          margin: 0 0 clamp(1.25rem, 1.5vw, 1.75rem);
          color: #748089;
          font-size: clamp(0.75rem, 0.68rem + 0.1vw, 0.875rem);
        }

        .activities__sample pre {
          margin: 0;
          overflow-x: auto;
          font-family: var(--font-site);
          font-size: clamp(0.9375rem, 0.9vw, 1.125rem);
          line-height: 1.65;
          tab-size: 2;
        }

        .activities__sample code {
          font: inherit;
        }

        .activities__curriculumHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #cbd0cd;
          color: #969c9b;
          font-size: clamp(0.875rem, 0.78rem + 0.12vw, 1rem);
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
          grid-template-columns: 5.5rem minmax(14rem, 0.9fr) minmax(0, 1fr);
          gap: 1rem;
          align-items: center;
          min-height: clamp(5rem, 4.6vw, 6rem);
          border-bottom: 1px solid #d4d8d5;
          font-size: clamp(1.125rem, 1.1vw, 1.375rem);
        }

        .activities__curriculum strong {
          font-weight: 650;
        }

        .activities__period {
          color: #a1a7a6;
          font-family: var(--font-site);
          font-size: clamp(0.8125rem, 0.72rem + 0.1vw, 0.9375rem);
          letter-spacing: 0.08em;
        }

        .activities__outcome {
          color: #979d9c;
          font-size: clamp(0.9375rem, 0.9vw, 1.0625rem);
        }

        @media (max-width: 68.75rem) {
          .activities__title {
            font-size: clamp(3.5rem, 6vw, 4.25rem);
          }

          .activities__catalog {
            grid-template-columns: 20rem minmax(0, 1fr);
            gap: 2rem;
          }

          .activities__tab {
            height: 4.25rem;
          }

          .activities__panelHeader {
            min-height: 9.5rem;
          }

          .activities__panel {
            height: clamp(28rem, 70vh, 36rem);
            height: clamp(28rem, 70svh, 36rem);
          }

          .activities__sample {
            min-height: 10rem;
          }

          .activities__curriculum li {
            grid-template-columns: 4.5rem minmax(0, 1fr);
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
            font-size: 1.5rem;
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
            font-size: 2.5rem;
          }

          .activities__count {
            font-size: 0.875rem;
          }

          .activities__sample pre {
            font-size: 0.8125rem;
          }

          .activities__curriculum li {
            grid-template-columns: 4.25rem minmax(0, 1fr);
            min-height: 4rem;
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
