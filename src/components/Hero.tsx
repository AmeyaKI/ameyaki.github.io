import { profile } from '../data/profile'
import { SocialLinks } from './SocialLinks'

export function Hero() {
  return (
    <section id="hero" className="hero section--fade">
      <div className="container">
        <div className="hero__grid">
          <div>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <SocialLinks variant="hero" />
            <a href="#activity" className="hero__scroll">
              what i&apos;m up to ↓
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
