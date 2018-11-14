import React, { Component } from 'react';
import './App.css';

import Headers from './components/Headers';
import Features from './components/Features';
import Footer from './components/Footer';
import Downloads from './components/Downloads';
// import ContactForm from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers className="App-header" />

        <Features />

        <Downloads />

        {/*  <ContactForm /> */}

        <Footer />
      </div>
    );
  }
}

export default App;
