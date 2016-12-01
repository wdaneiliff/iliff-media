import React, { Component } from 'react';
import MainNav from './ui/MainNav';
// import Footer from './ui/Footer';
import Home from './ui/Home/Home';
import About from './ui/About/About';
import Work from './ui/Work/Work';
import Contact from './ui/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
