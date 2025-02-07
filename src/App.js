import { useState } from 'react';
import { personalInfo, socialLinks } from './data';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

import './App.css';

import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import ExperienceCarousal from './components/ExperienceCarousal';
import Education from './components/Education';
import ContactForm from './components/Contact';
import Projects from './components/Projects';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        contacts={personalInfo.contacts}
      />

      <main>
        <HeroSection />
        <Skills />
        <Projects />
        <ExperienceCarousal />
        <Education />
        <ContactForm />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

const Header = ({ menuOpen, setMenuOpen, contacts }) => (
  <header>
    <nav>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {['Skills', 'Experience', 'Education', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

// const HeroSection = ({ name }) => (
//   <section className="hero">
//     <h1>{name}</h1>
//     <p>Data Scientist & Full Stack Developer</p>
//   </section>
// );



// Create similar components for Experience, Education, and Contact sections

export default App;