import './App.css';
import {  Routes, Route } from 'react-router-dom';
import { Body } from './components/Body';
import { Links } from './components/Links';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/about" element={<Links />} />
      </Routes>
  );
}

export default App;
