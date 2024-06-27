import React from 'react';
import NavBar from './Component/NavBar.jsx'
import Home from './Component/Home.jsx';
import SocialLinks from './Component/SocialLinks.jsx';
import About from './Component/About.jsx';
import Portfolio from './Component/Portfolio.jsx';
import Experience from './Component/Experience.jsx';
import Contact from './Component/Contact.jsx';


const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
