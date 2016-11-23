import React, { Component } from 'react';
import MainNav from './ui/MainNav';
import Footer from './ui/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
