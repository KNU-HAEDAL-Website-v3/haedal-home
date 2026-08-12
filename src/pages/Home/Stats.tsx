import { clubStats } from "../../data/stats.data";

export function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="stats__inner">
        <header className="stats__header">
          <h1 id="stats-title" className="stats__title">
            숫자로 보는 해달
          </h1>
        </header>

        <dl className="stats__list">
          {clubStats.map((stat) => (
            <div
              className={`stats__row${stat.accent ? " stats__row--accent" : ""}`}
              key={stat.id}
            >
              <dt className="stats__label">
                <span className="stats__status" aria-hidden="true" />
                {stat.label}
              </dt>

              <dd
                className="stats__value"
                aria-label={`${stat.label} ${stat.value.toLocaleString("ko-KR")}${stat.unit}`}
              >
                <span className="stats__marker" aria-hidden="true">
                  <span />
                </span>
                <span aria-hidden="true">
                  {stat.value.toLocaleString("ko-KR")}
                </span>
                <span className="stats__unit" aria-hidden="true">
                  {stat.unit}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <style>{`
        .stats {
          box-sizing: border-box;
          min-height: 100vh;
          min-height: 100svh;
          margin: 0;
          padding: 0 24px 32px;
          overflow: hidden;
          border-top: 4px solid #858585;
          background: #ffffff;
          color: #06111e;
          font-family: Pretendard, "Noto Sans KR", "Apple SD Gothic Neo",
            Arial, Helvetica, sans-serif;
        }

        .stats *,
        .stats *::before,
        .stats *::after {
          box-sizing: border-box;
        }

        .stats__inner {
          display: flex;
          flex-direction: column;
          width: min(100%, 1440px);
          min-height: calc(100vh - 36px);
          min-height: calc(100svh - 36px);
          margin: 0 auto;
        }

        .stats__header {
          display: flex;
          align-items: flex-start;
          min-height: clamp(230px, 34vh, 330px);
          padding-top: clamp(44px, 6vh, 72px);
        }

        .stats__title {
          max-width: 550px;
          margin: 0;
          font-size: clamp(20px, 1.75vw, 27px);
          font-weight: 650;
          line-height: 1.32;
          letter-spacing: -0.045em;
          word-break: keep-all;
        }

        .stats__list {
          display: flex;
          flex: 1;
          flex-direction: column;
          min-height: 0;
          margin: 0;
          padding: 0;
          border-top: 1px solid #e3e6e7;
        }

        .stats__row {
          display: grid;
          flex: 1 0 112px;
          grid-template-columns: minmax(190px, 29%) minmax(0, 1fr);
          align-items: center;
          min-height: 112px;
          border-bottom: 1px solid #e3e6e7;
        }

        .stats__label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          color: #13202c;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.02em;
          word-break: keep-all;
        }

        .stats__status {
          width: 5px;
          height: 5px;
          background: transparent;
        }

        .stats__row--accent .stats__status {
          background: #77e7aa;
        }

        .stats__value {
          display: flex;
          align-items: baseline;
          justify-content: flex-end;
          gap: 0.08em;
          min-width: 0;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(64px, 6.3vw, 92px);
          font-weight: 400;
          line-height: 0.88;
          letter-spacing: -0.065em;
          white-space: nowrap;
        }

        .stats__unit {
          color: #13202c;
          font-family: Pretendard, "Noto Sans KR", "Apple SD Gothic Neo",
            Arial, sans-serif;
          font-size: 0.35em;
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .stats__marker {
          display: inline-grid;
          place-items: center;
          width: 22px;
          height: 22px;
          margin-right: 0.2em;
          border-radius: 5px;
          background: #f0f2f2;
          transform: translateY(-0.12em);
        }

        .stats__marker span {
          width: 4px;
          height: 4px;
          background: #13202c;
        }

        @media (max-width: 800px) {
          .stats {
            padding-right: 20px;
            padding-left: 20px;
          }

          .stats__header {
            min-height: 240px;
            padding-top: 48px;
          }

          .stats__title {
            max-width: 440px;
            font-size: clamp(19px, 3.2vw, 24px);
          }

          .stats__row {
            grid-template-columns: minmax(130px, 32%) minmax(0, 1fr);
          }

          .stats__value {
            font-size: clamp(56px, 10vw, 76px);
          }

          .stats__marker {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 520px) {
          .stats {
            min-height: 100svh;
            padding: 0 16px 24px;
          }

          .stats__inner {
            min-height: calc(100svh - 28px);
          }

          .stats__header {
            min-height: 220px;
            padding-top: 40px;
          }

          .stats__title {
            max-width: 340px;
            font-size: 19px;
          }

          .stats__row {
            display: flex;
            flex: 1 0 150px;
            flex-direction: column;
            align-items: stretch;
            justify-content: center;
            min-height: 150px;
            padding: 18px 0;
          }

          .stats__label {
            font-size: 10px;
          }

          .stats__value {
            margin-top: 24px;
            font-size: clamp(58px, 19vw, 78px);
          }

          .stats__marker {
            width: 16px;
            height: 16px;
            border-radius: 4px;
          }
        }
      `}</style>
    </section>
  );
}
