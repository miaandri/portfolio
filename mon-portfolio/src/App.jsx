import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './srcs/Home'; 
import AboutMe from './srcs/AboutMe';
import Projects from './srcs/Projects';
import Skills from './srcs/Skills';
import CertSchool from './srcs/CertSchool';
import Contacts from './srcs/Contacts';
import Progress from './srcs/Progress';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/AboutMe" element={< AboutMe />} />
        <Route path="/Projects" element={< Projects />} />
        <Route path="/Skills" element={< Skills />} />
        <Route path="/Cert&School" element={< CertSchool />} />
        <Route path="/Contacts" element={< Contacts />} />
        <Route path="/Progress" element={< Progress />} />
      </Routes>
    </HashRouter>
  )
}

export default App
