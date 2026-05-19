import { profile } from '../data/profile'

export function Education() {
  const { education } = profile
  return (
    <section id="education" className="section section--fade">
      <div className="container">
        <p className="section__label">Education</p>
        <h2 className="section__title">Where I study</h2>
        <article className="edu__card">
          <h3 className="edu__school">{education.school}</h3>
          <p className="edu__degrees">{education.degrees}</p>
          <div className="edu__meta">
            <span>{education.graduation}</span>
            {/* <span>GPA {education.gpa}</span> */}
          </div>
          <p className="edu__coursework-title">Relevant Coursework</p>
          <ul className="edu__coursework">
            {education.coursework.map((course) => (
              <li key={course} className="edu__course">
                {course}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
