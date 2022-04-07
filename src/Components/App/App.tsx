import NavMenu from '../NavMenu/NavMenu'
import LinkMenu from '../LinkMenu/LinkMenu'
import Poster from '../Poster/Poster'
import Experience from '../ExperiencePage/Experience'
import Projects from '../ProjectsPage/Projects'
import AboutMe from '../AboutMePage/AboutMe'
import Contact from '../ContactPage/Contact'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Poster />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <LinkMenu />
    </div>
  )
}

export default App
