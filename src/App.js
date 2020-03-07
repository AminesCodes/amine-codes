import React from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <Contact />
      <About />
    </div>
  );
}

export default App;
