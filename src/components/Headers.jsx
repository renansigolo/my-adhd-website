import React from 'react';
import logo from '../logo.svg';

export default class Headers extends React.Component {
  render() {
    return (
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1>The first ADHD app with cognitive analysis!</h1>

        <button className="Header-button">Download</button>
      </header>
    );
  }
}
