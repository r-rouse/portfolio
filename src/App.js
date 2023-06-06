import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Body } from './components/Body';
import { Resume } from './pages/resume';
import { Header } from './components/Header';
import { About } from './pages/about';
import { Project } from './pages/projects';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
