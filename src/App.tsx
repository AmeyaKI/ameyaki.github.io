import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Activity } from './components/Activity'
import { Skills } from './components/Skills'
import { Education } from './components/Education'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Activity />
      <Skills />
      <Education />
    </Layout>
  )
}

export default App
