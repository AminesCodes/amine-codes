import React, { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  const [ navBarHeight, setNavBarHeight ] = useState(0);
  const [ footerHeight, setFooterHeight ] = useState(0);
  const [ screenHeight, setScreenHeight ] = useState(0);
  const [ sectionHeight, setSectionHeight ] = useState(0);

  const getNavBarHeight = dim => {
    setNavBarHeight(dim)
  }

  const getFooterHeight = dim => {
    setFooterHeight(dim)
  }

  const getScreenHeight = dim => {
    setScreenHeight(dim)
  }

  useEffect(() => {
    setSectionHeight(screenHeight - (navBarHeight + footerHeight))
    console.log(1000, 'Updating height')
  }, [navBarHeight, footerHeight, screenHeight])

  return (
    <div className="App">
      <NavBar getNavBarHeight={getNavBarHeight}/>
      <Home pad={navBarHeight} h={sectionHeight}/>
      <Skills pad={navBarHeight} h={sectionHeight}/>
      <Projects pad={navBarHeight} h={sectionHeight} getScreenHeight={getScreenHeight}/>
      <Contact pad={navBarHeight} h={sectionHeight}/>
      <Footer getFooterHeight={getFooterHeight}/>
    </div>
  );
}

export default App;
