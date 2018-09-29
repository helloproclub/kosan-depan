import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet
          titleTemplate="%s - Proclub Universitas Telkom"
          defaultTitle="Situs Resmi - Proclub Universitas Telkom"
        >
          <meta
            name="description"
            content="Inkubator mahasiswa Universtias Telkom untuk berkumpul dan berdiskusi tentang teknologi, berkompetisi, dan membangun sebuah solusi."
          />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
