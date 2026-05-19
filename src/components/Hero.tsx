import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="hero section--fade">
      <div className="container">
        <div className="hero__grid">
          <div>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <p className="hero__hook">{profile.hook}</p>
            <a href="#building" className="hero__cta">
              See what I&apos;m building
            </a>
          </div>
          <div className="hero__photo-wrap">
            <img
              src="/pfp.jpeg"
              alt={`Portrait of ${profile.name}`}
              className="hero__photo"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
