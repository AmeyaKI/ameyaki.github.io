import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Activity } from './components/Activity'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Activity />
    </Layout>
  )
}

export default App
