import { contributingItems } from '../data/contributing'
import { getCardSlots } from '../utils/cards'
import { WorkCard } from './WorkCard'

export function Contributing() {
  const slots = getCardSlots(contributingItems)
  return (
    <section id="contributing" className="section section--fade">
      <div className="container container--wide">
        <p className="section__label">Contributing</p>
        <h2 className="section__title">Where I&apos;m contributing</h2>
        <div className="card-grid" role="list">
          {slots.map((item, i) => (
            <WorkCard key={item?.title ?? `empty-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
