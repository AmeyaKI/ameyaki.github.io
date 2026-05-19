import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section section--fade">
      <div className="container">
        <p className="section__label">Skills</p>
        <h2 className="section__title">Tools & technologies</h2>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="skills__group-label">{group.label}</h3>
              <ul className="skills__tags">
                {group.tags.map((tag) => (
                  <li key={tag} className="skills__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
