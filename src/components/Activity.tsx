import { activityBullets } from '../data/activity'

export function Activity() {
  return (
    <section id="activity" className="section section--fade section--compact">
      <div className="container">
        <h2 className="activity__heading">
          <span className="activity__marker" aria-hidden>
            ⟢
          </span>{' '}
          what i&apos;m up to:
        </h2>
        <ul className="activity__list">
          {activityBullets.map((item, i) => (
            <li key={i} className="activity__item">
              {item || '\u00A0'}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
