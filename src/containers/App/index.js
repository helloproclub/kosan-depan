import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

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


        {/* Content */}
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
