import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/container/Home/Home';
import About from './components/container/About/About';
import Skills from './components/container/Skills/Skills';
import Portfolio from './components/container/Portfolio/Portfolio';
import Footer from './components/container/Footer/Footer';


const App = () => {
  return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
  );
}

export default App;
