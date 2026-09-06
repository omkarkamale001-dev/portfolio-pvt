import { useState } from 'react'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Clients from './components/Clients'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />
      <Cursor />
      <div className="grain" />
      <div className={`site${loaded ? ' site--loaded' : ''}`}>
        <Nav />
        <main>
          <Hero />
          <Clients />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
