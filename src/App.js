import './App.css';
import About from './components/About';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Navbar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceList from './components/Experience';

function App() {
  return (
    <div className="App-container">
      <Navbar />
      <Intro />
      <Contact />
      <About />
      <ExperienceList/>
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
