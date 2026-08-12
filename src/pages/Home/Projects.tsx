import { allProjectsHref, projects } from "../../data/projects.data";

const ITEMS_PER_SHELF = 4;

const projectShelves = Array.from(
  { length: Math.ceil(projects.length / ITEMS_PER_SHELF) },
  (_, index) =>
    projects.slice(
      index * ITEMS_PER_SHELF,
      (index + 1) * ITEMS_PER_SHELF,
    ),
);

export function Projects() {
  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="projects__inner">
        <header className="projects__header">
          <div>
            <p className="projects__eyebrow">PROJECT CATALOG</p>
            <h2 id="projects-title" className="projects__title">
              해달의
              <br />
              <span>프로젝트</span>
            </h2>
          </div>

          <a className="projects__allLink" href={allProjectsHref}>
            <span>전체 프로젝트 보기</span>
            <svg viewBox="0 0 48 20" aria-hidden="true">
              <path d="M1 10H44M37 3L44 10L37 17" />
            </svg>
          </a>
        </header>

        <div className="projects__catalog">
          {projectShelves.map((shelf, shelfIndex) => (
            <div className="projects__shelf" key={`shelf-${shelfIndex}`}>
              <ol className="projects__row">
                {shelf.map((project, itemIndex) => {
                  const projectIndex =
                    shelfIndex * ITEMS_PER_SHELF + itemIndex + 1;

                  return (
                    <li className="projects__item" key={project.id}>
                      <a
                        className="projects__card"
                        href={project.href}
                        aria-label={`${project.title}: ${project.description}`}
                        style={{ backgroundColor: project.coverColor }}
                      >
                        <span className="projects__fallback" aria-hidden="true">
                          {String(projectIndex).padStart(2, "0")}
                        </span>
                        <img
                          src={project.image}
                          alt=""
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />

                        <span className="projects__overlay" aria-hidden="true">
                          <span className="projects__overlayNumber">
                            {String(projectIndex).padStart(2, "0")}
                          </span>
                          <span className="projects__overlayContent">
                            <strong>{project.title}</strong>
                            <span>{project.description}</span>
                          </span>
                          <svg viewBox="0 0 40 16">
                            <path d="M1 8H37M31 2L37 8L31 14" />
                          </svg>
                        </span>
                      </a>

                      <span className="projects__caption" aria-hidden="true">
                        <span>{String(projectIndex).padStart(2, "0")}</span>
                        <span>{project.title}</span>
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
          box-sizing: border-box;
          min-height: 100vh;
          min-height: 100svh;
          margin: 0;
          padding: 56px 64px 72px;
          overflow: hidden;
          background: #f5f5f5;
          color: #111111;
          font-family: Pretendard, "Noto Sans KR", "Apple SD Gothic Neo",
            Arial, Helvetica, sans-serif;
        }

        .projects *,
        .projects *::before,
        .projects *::after {
          box-sizing: border-box;
        }

        .projects__inner {
          width: min(100%, 1320px);
          margin: 0 auto;
        }

        .projects__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 48px;
          min-height: 220px;
          padding-bottom: 56px;
          border-bottom: 1px solid #cfcfcf;
        }

        .projects__eyebrow {
          margin: 0 0 14px;
          color: #777777;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.13em;
        }

        .projects__title {
          margin: 0;
          font-size: clamp(48px, 5.1vw, 72px);
          font-weight: 750;
          line-height: 0.9;
          letter-spacing: -0.07em;
        }

        .projects__title span {
          color: #555555;
        }

        .projects__allLink {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 14px 0;
          color: #111111;
          font-size: clamp(22px, 2.3vw, 34px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.055em;
          text-decoration: none;
        }

        .projects__allLink svg {
          width: 48px;
          height: 20px;
          overflow: visible;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: transform 180ms ease;
        }

        .projects__allLink:hover svg,
        .projects__allLink:focus-visible svg {
          transform: translateX(8px);
        }

        .projects__allLink:focus-visible,
        .projects__card:focus-visible {
          outline: 3px solid #111111;
          outline-offset: 5px;
        }

        .projects__catalog {
          padding-top: 52px;
        }

        .projects__shelf {
          position: relative;
          padding: 0 34px 44px;
        }

        .projects__shelf + .projects__shelf {
          margin-top: 46px;
        }

        .projects__shelf::before {
          position: absolute;
          right: 0;
          bottom: 31px;
          left: 0;
          height: 13px;
          border-top: 1px solid #bdbdbd;
          background: linear-gradient(to bottom, #ffffff 0 45%, #d2d2d2 100%);
          box-shadow: 0 16px 24px rgba(0, 0, 0, 0.14);
          content: "";
        }

        .projects__row {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(22px, 3vw, 48px);
          align-items: end;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .projects__item {
          min-width: 0;
        }

        .projects__card {
          position: relative;
          display: block;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.16);
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 11px 17px rgba(0, 0, 0, 0.17);
          transform-origin: bottom center;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .projects__card:hover,
        .projects__card:focus-visible {
          z-index: 2;
          box-shadow: 0 22px 34px rgba(0, 0, 0, 0.26);
          transform: translateY(-12px) scale(1.025);
        }

        .projects__card > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) contrast(1.04);
          transition:
            transform 400ms ease,
            filter 220ms ease;
        }

        .projects__card:hover > img,
        .projects__card:focus-visible > img {
          filter: grayscale(1) contrast(1.12);
          transform: scale(1.06);
        }

        .projects__fallback {
          position: absolute;
          top: 18px;
          left: 18px;
          color: rgba(0, 0, 0, 0.68);
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(38px, 4vw, 58px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.07em;
        }

        .projects__overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          background: rgba(0, 0, 0, 0.9);
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 180ms ease,
            transform 220ms ease;
        }

        .projects__card:hover .projects__overlay,
        .projects__card:focus-visible .projects__overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .projects__overlayNumber {
          color: #bdbdbd;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .projects__overlayContent {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding: 24px 0;
        }

        .projects__overlayContent strong {
          font-size: clamp(19px, 1.7vw, 25px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.055em;
          word-break: keep-all;
        }

        .projects__overlayContent > span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.55;
          letter-spacing: -0.03em;
          word-break: keep-all;
        }

        .projects__overlay > svg {
          align-self: flex-end;
          width: 40px;
          height: 16px;
          overflow: visible;
          fill: none;
          stroke: #ffffff;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .projects__caption {
          display: flex;
          gap: 12px;
          margin-top: 14px;
          color: #6f6f6f;
          font-size: 10px;
          font-weight: 650;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .projects__caption span:first-child {
          color: #111111;
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing: 0.06em;
        }

        @media (max-width: 920px) {
          .projects {
            padding: 44px 32px 56px;
          }

          .projects__header {
            min-height: 200px;
            padding-bottom: 44px;
          }

          .projects__allLink {
            gap: 14px;
            font-size: 22px;
          }

          .projects__allLink svg {
            width: 38px;
          }

          .projects__shelf {
            padding-right: 22px;
            padding-left: 22px;
          }

          .projects__row {
            gap: 22px;
          }

          .projects__overlay {
            padding: 16px;
          }
        }

        @media (max-width: 660px) {
          .projects {
            padding: 36px 20px 48px;
            overflow: visible;
          }

          .projects__header {
            display: block;
            min-height: 0;
            padding-bottom: 40px;
          }

          .projects__title {
            font-size: clamp(48px, 15vw, 64px);
          }

          .projects__allLink {
            justify-content: space-between;
            width: 100%;
            margin-top: 46px;
            font-size: 22px;
          }

          .projects__catalog {
            padding-top: 42px;
          }

          .projects__shelf {
            margin-right: -20px;
            margin-left: -20px;
            padding: 0 20px 43px;
            overflow-x: auto;
            scrollbar-width: none;
          }

          .projects__shelf::-webkit-scrollbar {
            display: none;
          }

          .projects__shelf + .projects__shelf {
            margin-top: 36px;
          }

          .projects__shelf::before {
            right: 20px;
            left: 20px;
          }

          .projects__row {
            grid-template-columns: none;
            grid-auto-columns: minmax(205px, 62vw);
            grid-auto-flow: column;
            width: max-content;
            padding-right: 20px;
          }

          .projects__card {
            box-shadow: 0 10px 16px rgba(0, 0, 0, 0.16);
          }
        }

        @media (hover: none) {
          .projects__overlay {
            justify-content: flex-end;
            padding-top: 44%;
            background: linear-gradient(
              to bottom,
              transparent 24%,
              rgba(0, 0, 0, 0.92) 100%
            );
            opacity: 1;
            transform: none;
          }

          .projects__overlayNumber {
            position: absolute;
            top: 16px;
            left: 16px;
          }

          .projects__overlayContent {
            padding-bottom: 14px;
          }

          .projects__caption {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects__card,
          .projects__card > img,
          .projects__overlay,
          .projects__allLink svg {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
