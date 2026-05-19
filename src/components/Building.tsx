import { buildingItems } from '../data/building'
import { getCardSlots } from '../utils/cards'
import { WorkCard } from './WorkCard'

export function Building() {
  const slots = getCardSlots(buildingItems)
  return (
    <section id="building" className="section section--fade">
      <div className="container container--wide">
        <p className="section__label">Building</p>
        <h2 className="section__title">What I&apos;m building</h2>
        <div className="card-grid" role="list">
          {slots.map((item, i) => (
            <WorkCard key={item?.title ?? `empty-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
