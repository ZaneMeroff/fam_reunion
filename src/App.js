import React, { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { SimonGame } from './components/SimonGame/SimonGame';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import './App.css';

const App = () => {

  smoothscroll.polyfill();

  useEffect(() => {
    document.addEventListener('touchstart', () => {}, false);
  });

  return (
    <section>
      <Nav />
      <Header />
      <About />
      <SimonGame />
      <WorkExperience />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
