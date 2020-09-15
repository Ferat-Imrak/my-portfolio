import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CoverImg from './components/CoverImg';
import MyExperties from './components/MyExperties';
import Projects from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div>
      <NavBar />
      <CoverImg />
      <About />
      <MyExperties />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
