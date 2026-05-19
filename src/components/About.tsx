import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="section section--fade">
      <div className="container">
        <p className="section__label">About</p>
        <h2 className="section__title">{profile.aboutTitle}</h2>
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="about__text">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
