import './App.css';
import {  Routes, Route } from 'react-router-dom';
import { Body } from './components/Body';
import { Links } from './components/Links';
import { Resume } from './pages/resume';
import { Header } from './components/Header';
import { About } from './pages/about';
import { Project } from './pages/projects';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/pojects" element={<Project />} />
      </Routes>
      </>
  );
}

export default App;
