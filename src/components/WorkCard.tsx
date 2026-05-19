import type { WorkCard as WorkCardType } from '../types'

type Props = {
  item: WorkCardType | null
}

export function WorkCard({ item }: Props) {
  if (!item) {
    return (
      <article className="work-card work-card--empty" aria-hidden="true" />
    )
  }

  return (
    <article className="work-card work-card--filled">
      {item.period && <p className="work-card__period">{item.period}</p>}
      <h3 className="work-card__title">{item.title}</h3>
      {item.subtitle && (
        <p className="work-card__subtitle">{item.subtitle}</p>
      )}
      {item.summary.length > 0 && (
        <div className="work-card__summary">
          {item.summary.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
      {item.tags.length > 0 && (
        <ul className="work-card__tags">
          {item.tags.map((tag) => (
            <li key={tag} className="work-card__tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
