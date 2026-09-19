import { SocialLinks } from './components/SocialLinks'
import { experience, projects } from './data/activity'
import { profile } from './data/profile'

function App() {
  return (
    <main className="page">
      <header className="header">
        <h1 className="name">{profile.name}</h1>
        <SocialLinks />
      </header>

      {profile.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}

      <h2 className="heading">~/experience</h2>
      <ul className="list">
        {experience.map((item) => (
          <li key={item.title}>
            <span className="list__title">{item.title}</span>{' '}
            — {item.description}
          </li>
        ))}
      </ul>

      <h2 className="heading">~/projects</h2>
      <ul className="list">
        {projects.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="list__title" target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>{' '}
            — {item.description}
          </li>
        ))}
        <li>and more to come...</li>
      </ul>
    </main>
  )
}

export default App
