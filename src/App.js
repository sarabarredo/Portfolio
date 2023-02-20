import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/container/Home/Home';
import Sobre from './components/container/Sobre mi/Sobre-mi';
import Habilidades from './components/container/Habilidades/Habilidades';
import Portfolio from './components/container/Portfolio/Portfolio';
import Footer from './components/container/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sobre />
      <Habilidades />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
