import { activityItems, type ActivityItem } from '../data/activity'

const METRIC_SPLIT = /(~?\d+(?:\.\d+)?%?x?|\d+K\+)/g
const METRIC_MATCH = /^(~?\d+(?:\.\d+)?%?x?|\d+K\+)$/

function emphasizeMetrics(text: string) {
  const parts = text.split(METRIC_SPLIT)
  return parts.map((part, i) =>
    METRIC_MATCH.test(part) ? (
      <span key={i} className="activity__metric">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

function activityKey(item: ActivityItem) {
  return item.organization ?? item.name ?? item.role ?? ''
}

function activityLabel(item: ActivityItem) {
  if (item.role && item.organization) {
    return `${item.role} @ ${item.organization}`
  }
  return item.name ?? ''
}

function LinkIndicator() {
  return (
    <span className="activity__link-indicator">
      <span className="activity__link-label">link</span>
      <svg
        className="activity__arrow"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M7 17L17 7M17 7H9M17 7v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function ActivityRowContent({ item, linked }: { item: ActivityItem; linked?: boolean }) {
  const leadClass = linked ? ' activity__lead--linked' : ''

  return (
    <p className="activity__text">
      <span className={`activity__lead${leadClass}`}>
        {item.role && item.organization ? (
          <>
            <span className="activity__role">{item.role}</span>
            <span className="activity__at"> @ </span>
            <span className="activity__org">{item.organization}</span>
          </>
        ) : (
          <span className="activity__name">{item.name}</span>
        )}
      </span>
      <span className="activity__sep"> – </span>
      <span className="activity__body">{emphasizeMetrics(item.description)}</span>
    </p>
  )
}

export function Activity() {
  return (
    <section id="activity" className="section section--fade section--compact">
      <div className="container">
        <p className="section__label">Activity</p>
        <h2 className="activity__heading">
          <span className="activity__marker" aria-hidden>
            ⟢
          </span>{' '}
          what i&apos;m up to
        </h2>
        <div className="activity__stack">
          {activityItems.map((item) =>
            item.href ? (
              <a
                key={activityKey(item)}
                href={item.href}
                className="activity__row activity__row--linked"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${activityLabel(item)} (external link)`}
              >
                <ActivityRowContent item={item} linked />
                <LinkIndicator />
              </a>
            ) : (
              <article key={activityKey(item)} className="activity__row activity__row--plain">
                <ActivityRowContent item={item} />
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
