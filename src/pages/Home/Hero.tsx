export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__layout">
        <div className="hero__copy">

          <h1
            id="hero-title"
            className="hero__title"
            aria-label="ANY MAJOR. ONE CODE: HAEDAL;"
          >
            <span className="hero__titleLine hero__titleLine--muted" aria-hidden="true">
              ANY MAJOR.
            </span>
            <span className="hero__titleLine hero__titleLine--muted" aria-hidden="true">
              ONE CODE:
            </span>
            <span className="hero__titleLine" aria-hidden="true">
              HAEDAL;
            </span>
          </h1>


        </div>

        <div className="hero__trail">
          <p className="hero__trailText">
            경북대 IT대학 학술동아리 해달
          </p>
          <svg
            className="hero__arrow"
            viewBox="0 0 640 18"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M1 9H636M630 3L636 9L630 15" />
          </svg>
          <p className="hero__trailText">
            bootcamp, track, project, hackathon and more
          </p>
        </div>
      </div>

      <style>{`
        html,
        body {
          margin: 0;
        }

        .hero {
          box-sizing: border-box;
          min-height: 100vh;
          min-height: 100svh;
          margin: 0;
          padding: 48px 16px 16px;
          overflow: hidden;
          background: #ffffff;
          color: #000000;
          font-family: Arial, Helvetica, sans-serif;
        }

        .hero *,
        .hero *::before,
        .hero *::after {
          box-sizing: border-box;
        }

        .hero__layout {
          display: grid;
          grid-template-columns: minmax(650px, 1fr) minmax(0, 0.8fr);
          gap: 48px;
          align-items: end;
          width: 100%;
          min-height: calc(100vh - 64px);
          min-height: calc(100svh - 64px);
        }

        .hero__copy {
          min-width: 0;
        }

        .hero__title {
          margin: 0;
          font-size: clamp(100px, 9vw, 168px);
          font-weight: 700;
          line-height: 0.86;
          letter-spacing: -6px;
        }

        .hero__titleLine {
          display: block;
          white-space: nowrap;
        }

        .hero__titleLine--muted {
          color: #737270;
        }

        .hero__description {
          margin: 10px 0 0;
          color: #858482;
          font-family: Pretendard, "Noto Sans KR", "Apple SD Gothic Neo",
            system-ui, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: -0.45px;
        }

        .hero__trail {
          width: calc(100% - 15px);
          margin-bottom: 60px;
        }

        .hero__arrow {
          display: block;
          width: 100%;
          height: 18px;
          overflow: visible;
          fill: none;
          stroke: #737270;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
        }

        .hero__arrow path {
          vector-effect: non-scaling-stroke;
        }

        .hero__trailText {
          margin: 0;
          color: #858482;
          font-size: 24px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.35px;
          text-align: right;
          white-space: nowrap;
        }

        @media (max-width: 1100px) {
          .hero {
            padding-right: 16px;
            padding-left: 16px;
          }

          .hero__layout {
            grid-template-columns: minmax(400px, 1fr) minmax(0, 1fr);
            gap: 32px;
          }

          .hero__title {
            font-size: clamp(64px, 8vw, 92px);
            letter-spacing: -4.5px;
          }

          .hero__trailText {
            font-size: 19px;
          }
        }

        @media (max-width: 820px) {
          .hero {
            min-height: 100svh;
            padding: 48px 20px 24px;
          }

          .hero__layout {
            grid-template-columns: 1fr;
            gap: 44px;
            align-content: end;
            min-height: calc(100svh - 72px);
          }

          .hero__title {
            font-size: clamp(44px, 10.5vw, 60px);
            letter-spacing: -2px;
          }

          .hero__description {
            margin-top: 10px;
            font-size: 16px;
          }

          .hero__trail {
            width: 100%;
            margin-bottom: 0;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 32px 12px 16px;
          }

          .hero__layout {
            gap: 36px;
            min-height: calc(100svh - 48px);
          }

          .hero__title {
            font-size: clamp(38px, 11.7vw, 50px);
            letter-spacing: -1.6px;
          }

          .hero__trailText {
            overflow-wrap: anywhere;
            font-size: 15px;
            line-height: 1.35;
            white-space: normal;
          }
        }

      `}</style>
    </section>
  );
}
