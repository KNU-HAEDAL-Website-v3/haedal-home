import { tracks, type WorkspaceItemTone } from "../../data/tracks.data";

const TRACKS_STYLES = `
  .tracks {
    --tracks-ink: #11171c;
    --tracks-slate: #62696d;
    --tracks-muted: #959b9e;
    --tracks-line: #d8dbd9;
    --tracks-paper: #f5f5f2;
    --tracks-dark: #111619;
    --tracks-dark-text: #f5f5f2;
    --tracks-dark-muted: #a9afb1;

    width: 100%;
    background: var(--tracks-paper);
    color: var(--tracks-ink);
  }

  .tracks *,
  .tracks *::before,
  .tracks *::after {
    box-sizing: border-box;
  }

  .tracks__inner {
    width: min(
      calc(100% - (var(--page-gutter, clamp(1.5rem, 4vw, 4.5rem)) * 2)),
      var(--content-max, 107.5rem)
    );

    margin: 0 auto;

    padding-block:
      clamp(5rem, 9vw, 9rem)
      clamp(6rem, 11vw, 11rem);
  }

  /* ----------------------------------
     Header
  ---------------------------------- */

  .tracks__header {
    display: grid;
    grid-template-columns:
      minmax(0, 1.35fr)
      minmax(18rem, 0.65fr);

    gap: clamp(2rem, 6vw, 8rem);

    align-items: end;

    padding-bottom: clamp(2.5rem, 5vw, 5rem);
    border-bottom: 1px solid var(--tracks-line);
  }

  .tracks__eyebrow {
    margin: 0 0 1.25rem;

    font-family:
      "JetBrains Mono",
      "SFMono-Regular",
      Consolas,
      monospace;

    font-size: clamp(0.7rem, 0.65vw, 0.8rem);
    font-weight: 500;

    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: var(--tracks-muted);
  }

  .tracks__title {
    margin: 0;

    font-size: clamp(4rem, 7.5vw, 8.5rem);
    font-weight: 800;

    line-height: 0.9;
    letter-spacing: -0.065em;

    text-wrap: balance;
  }

  .tracks__title-accent {
    color: var(--tracks-slate);
  }

  .tracks__intro {
    max-width: 31rem;
    margin: 0;

    font-size: clamp(1rem, 1.1vw, 1.25rem);
    line-height: 1.65;

    letter-spacing: -0.025em;

    color: var(--tracks-slate);
  }

  /* ----------------------------------
     Track
  ---------------------------------- */

  .track {
    padding-block: clamp(4rem, 7vw, 7rem);

    border-bottom: 1px solid var(--tracks-line);
  }

  .track__heading {
    display: grid;
    grid-template-columns:
      clamp(3rem, 5vw, 5.5rem)
      minmax(0, 1fr)
      auto;

    column-gap: clamp(1.25rem, 2.5vw, 3rem);
    align-items: end;

    margin-bottom: clamp(2.5rem, 4.5vw, 4.5rem);
  }

  .track__number {
    padding-bottom: 0.35rem;

    font-family:
      "JetBrains Mono",
      "SFMono-Regular",
      Consolas,
      monospace;

    font-size: clamp(0.75rem, 0.75vw, 0.9rem);
    letter-spacing: 0.06em;

    color: var(--tracks-muted);
  }

  .track__name {
    margin: 0;

    font-size: clamp(2.7rem, 5vw, 6.25rem);
    font-weight: 800;

    line-height: 0.92;
    letter-spacing: -0.06em;
  }

  .track__heading-meta {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 1rem;

    padding-bottom: 0.5rem;
  }

  .track__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 1.75rem;

    padding: 0.3rem 0.75rem;

    border: 1px solid var(--tracks-ink);

    font-family:
      "JetBrains Mono",
      "SFMono-Regular",
      Consolas,
      monospace;

    font-size: 0.67rem;
    font-weight: 500;

    letter-spacing: 0.08em;

    color: var(--tracks-ink);
  }

  .track__badge--closed {
    border-color: var(--tracks-muted);
    color: var(--tracks-muted);
  }

  .track__meta {
    font-family:
      "JetBrains Mono",
      "SFMono-Regular",
      Consolas,
      monospace;

    font-size: clamp(0.67rem, 0.7vw, 0.78rem);
    letter-spacing: 0.02em;

    white-space: nowrap;

    color: var(--tracks-muted);
  }

  /* ----------------------------------
     Intro row
  ---------------------------------- */

  .track__body {
    padding-left: calc(clamp(3rem, 5vw, 5.5rem) + clamp(1.25rem, 2.5vw, 3rem));
  }

  .track__description {
    max-width: 42rem;

    margin: 0 0 clamp(2.75rem, 4vw, 4.5rem);

    font-size: clamp(1.25rem, 1.75vw, 2rem);
    font-weight: 500;

    line-height: 1.45;
    letter-spacing: -0.035em;

    color: var(--tracks-slate);
  }

  /* ----------------------------------
     Content
  ---------------------------------- */

  .track__columns {
    display: grid;
    grid-template-columns:
      minmax(0, 1.05fr)
      minmax(0, 0.95fr);

    gap: clamp(2.5rem, 6vw, 7rem);

    align-items: start;
  }

  .track__label {
    margin: 0 0 1rem;

    font-family:
      "JetBrains Mono",
      "SFMono-Regular",
      Consolas,
      monospace;

    font-size: 0.68rem;
    font-weight: 500;

    letter-spacing: 0.11em;
    text-transform: uppercase;

    color: var(--tracks-muted);
  }

  /* ----------------------------------
     Workspace mockup
  ---------------------------------- */

  .track-workspace {
    position: relative;

    min-height: 20rem;
    max-height: 25rem;

    overflow: hidden;

    background: var(--tracks-dark);
    color: var(--tracks-dark-text);
  }

  .track-workspace__inner {
    padding:
      clamp(1.5rem, 2.5vw, 2.5rem)
      clamp(1.5rem, 2.5vw, 2.75rem)
      6rem;
  }

  .track-workspace__section + .track-workspace__section {
    margin-top: 2rem;
  }

  .track-workspace__title {
    margin: 0 0 0.8rem;

    font-size: clamp(0.95rem, 1vw, 1.1rem);
    font-weight: 700;

    line-height: 1.35;
    letter-spacing: -0.02em;
  }

  .track-workspace__item {
    margin: 0.4rem 0;

    font-size: clamp(0.78rem, 0.8vw, 0.92rem);
    line-height: 1.55;

    color: var(--tracks-dark-muted);
  }

  .track-workspace__item--link,
  .track-workspace__item--document {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.2em;
  }

  .track-workspace__item--link {
    color: var(--tracks-dark-text);
  }

  .track-workspace__item--document {
    text-decoration-color: #555b5e;
  }

  .track-workspace__fade {
    position: absolute;

    left: 0;
    right: 0;
    bottom: 0;

    height: 7rem;

    pointer-events: none;

    background:
      linear-gradient(
        to bottom,
        rgba(17, 22, 25, 0),
        rgba(17, 22, 25, 1)
      );
  }

  .track__caption {
    max-width: 42rem;

    margin: 0.85rem 0 0;

    font-size: clamp(0.75rem, 0.78vw, 0.9rem);
    line-height: 1.6;

    color: var(--tracks-muted);
  }

  /* ----------------------------------
     Activities
  ---------------------------------- */

  .track-activities {
    margin: 0;
    padding: 0;

    list-style: none;

    border-top: 1px solid var(--tracks-line);
  }

  .track-activities__item {
    display: grid;
    grid-template-columns: 2rem minmax(0, 1fr);

    gap: 1rem;

    align-items: baseline;

    padding-block: clamp(1rem, 1.5vw, 1.4rem);

    border-bottom: 1px solid var(--tracks-line);
  }

  .track-activities__number {
    font-family:
      "JetBrains Mono",
      "SFMono-Regular",
      Consolas,
      monospace;

    font-size: 0.67rem;

    color: var(--tracks-muted);
  }

  .track-activities__text {
    font-size: clamp(0.95rem, 1vw, 1.1rem);
    font-weight: 600;

    line-height: 1.45;
    letter-spacing: -0.025em;
  }

  .track-activities__note {
    margin-left: 0.35rem;

    font-size: 0.8em;
    font-weight: 400;

    color: var(--tracks-muted);
  }

  .track__notion-link {
    display: inline-flex;
    align-items: center;

    gap: 0.55rem;

    margin-top: 1.5rem;

    color: var(--tracks-ink);

    font-size: clamp(0.85rem, 0.85vw, 0.95rem);
    font-weight: 600;

    letter-spacing: -0.015em;

    text-decoration: none;
  }

  .track__notion-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.25rem;
  }

  .track__notion-link svg {
    width: 0.9rem;
    height: 0.9rem;
  }

  /* ----------------------------------
     Footer / CTA
  ---------------------------------- */

  .track__footer {
    display: flex;
    align-items: center;

    gap: 1.5rem;

    margin-top: clamp(2.75rem, 4vw, 4.5rem);
  }

  .track__cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 9.5rem;
    min-height: 3.25rem;

    padding-inline: 1.5rem;

    border: 1px solid var(--tracks-ink);

    background: var(--tracks-ink);
    color: #fff;

    font: inherit;
    font-size: 0.9rem;
    font-weight: 650;

    letter-spacing: -0.02em;

    text-decoration: none;

    cursor: pointer;

    transition:
      background-color 160ms ease,
      color 160ms ease;
  }

  .track__cta:hover {
    background: transparent;
    color: var(--tracks-ink);
  }

  .track__cta--disabled {
    border-color: var(--tracks-line);

    background: transparent;
    color: var(--tracks-muted);

    cursor: default;
  }

  .track__cta--disabled:hover {
    background: transparent;
    color: var(--tracks-muted);
  }

  .track__schedule {
    font-size: clamp(0.75rem, 0.8vw, 0.9rem);
    line-height: 1.5;

    color: var(--tracks-muted);
  }

  /* ----------------------------------
     Responsive
  ---------------------------------- */

  @media (max-width: 72rem) {
    .tracks__header {
      grid-template-columns: 1fr;
    }

    .tracks__intro {
      max-width: 38rem;
    }

    .track__heading {
      grid-template-columns:
        3rem
        minmax(0, 1fr);
    }

    .track__heading-meta {
      grid-column: 2;
      justify-content: flex-start;

      margin-top: 1rem;
      padding-bottom: 0;
    }

    .track__body {
      padding-left: calc(3rem + clamp(1.25rem, 2.5vw, 3rem));
    }

    .track__columns {
      gap: 3rem;
    }
  }

  @media (max-width: 52rem) {
    .tracks__inner {
      width: min(
        calc(100% - (var(--page-gutter, 1.5rem) * 2)),
        var(--content-max, 107.5rem)
      );
    }

    .tracks__title {
      font-size: clamp(3.5rem, 14vw, 6rem);
    }

    .track__heading {
      display: block;
    }

    .track__number {
      display: block;
      margin-bottom: 0.9rem;
    }

    .track__heading-meta {
      margin-top: 1.2rem;
    }

    .track__body {
      padding-left: 0;
    }

    .track__columns {
      grid-template-columns: 1fr;

      gap: 3rem;
    }

    .track-workspace {
      max-height: 22rem;
    }

    .track__footer {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (max-width: 32rem) {
    .track__heading-meta {
      align-items: flex-start;
      flex-direction: column;

      gap: 0.7rem;
    }

    .track__meta {
      white-space: normal;
    }

    .track__cta {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tracks *,
    .tracks *::before,
    .tracks *::after {
      transition: none !important;
    }
  }
`;

function getWorkspaceItemClass(tone?: WorkspaceItemTone) {
  if (!tone || tone === "default") {
    return "track-workspace__item";
  }

  return `track-workspace__item track-workspace__item--${tone}`;
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

export function Tracks() {
  return (
    <section className="tracks" aria-labelledby="tracks-heading">
      <style>{TRACKS_STYLES}</style>

      <div className="tracks__inner">
        <header className="tracks__header">
          <div>
           

            <h2 className="tracks__title" id="tracks-heading">
              해달 그리고
              <br />
              <span className="tracks__title-accent">트랙</span>
            </h2>
          </div>

          <p className="tracks__intro">
            부트캠프가 기초를 떼는 곳이라면, <br />
            트랙은 하나를 깊게 파는 곳입니다.  <br />
            실제로 어떻게 굴러가는지 그대로 보여드릴게요.
          </p>
        </header>

        <div>
          {tracks.map((track, trackIndex) => {
            const trackNumber = String(trackIndex + 1).padStart(2, "0");

            return (
              <article
                className="track"
                id={`track-${track.id}`}
                key={track.id}
              >
                <header className="track__heading">
                  <span
                    className="track__number"
                    aria-hidden="true"
                  >
                    {trackNumber}
                  </span>

                  <h3 className="track__name">
                    {track.name}
                  </h3>

                  <div className="track__heading-meta">
                    <span
                      className={[
                        "track__badge",
                        track.status === "closed"
                          ? "track__badge--closed"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {track.statusLabel}
                    </span>

                    <span className="track__meta">
                      {track.meta}
                    </span>
                  </div>
                </header>

                <div className="track__body">
                  <p className="track__description">
                    {track.description}
                  </p>

                  <div className="track__columns">
                    <div>
                      <p className="track__label">
                        Workspace
                      </p>

                      <div
                        className="track-workspace"
                        aria-label={`${track.name} 작업 공간 예시`}
                      >
                        <div className="track-workspace__inner">
                          {track.workspace.map(
                            (section, sectionIndex) => (
                              <div
                                className="track-workspace__section"
                                key={`${track.id}-workspace-${sectionIndex}`}
                              >
                                <h4 className="track-workspace__title">
                                  {section.title}
                                </h4>

                                {section.items.map(
                                  (item, itemIndex) => (
                                    <p
                                      className={getWorkspaceItemClass(
                                        item.tone,
                                      )}
                                      key={`${track.id}-workspace-${sectionIndex}-${itemIndex}`}
                                    >
                                      {item.text}
                                    </p>
                                  ),
                                )}
                              </div>
                            ),
                          )}
                        </div>

                        <div
                          className="track-workspace__fade"
                          aria-hidden="true"
                        />
                      </div>

                      <p className="track__caption">
                        {track.workspaceCaption}
                      </p>
                    </div>

                    <div>
                      <p className="track__label">
                        What we do
                      </p>

                      <ol className="track-activities">
                        {track.activities.map(
                          (activity, activityIndex) => (
                            <li
                              className="track-activities__item"
                              key={`${track.id}-activity-${activityIndex}`}
                            >
                              <span
                                className="track-activities__number"
                                aria-hidden="true"
                              >
                                {String(
                                  activityIndex + 1,
                                ).padStart(2, "0")}
                              </span>

                              <span className="track-activities__text">
                                {activity.title}

                                {activity.note && (
                                  <span className="track-activities__note">
                                    ({activity.note})
                                  </span>
                                )}
                              </span>
                            </li>
                          ),
                        )}
                      </ol>

                      <a
                        className="track__notion-link"
                        href={track.notionHref}
                      >
                        노션에서 전체 보기
                        <ExternalLinkIcon />
                      </a>
                    </div>
                  </div>

                  <footer className="track__footer">
                    {track.status === "open" &&
                    track.applyHref ? (
                      <a
                        className="track__cta"
                        href={track.applyHref}
                      >
                        {track.ctaLabel}
                      </a>
                    ) : (
                      <span
                        className="track__cta track__cta--disabled"
                        aria-disabled="true"
                      >
                        {track.ctaLabel}
                      </span>
                    )}

                    <span className="track__schedule">
                      {track.schedule}
                    </span>
                  </footer>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tracks;