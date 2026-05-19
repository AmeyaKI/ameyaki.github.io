import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Building } from './components/Building'
import { Contributing } from './components/Contributing'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Building />
      <Contributing />
    </Layout>
  )
}

export default App
