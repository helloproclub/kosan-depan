import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';
import Container from '../../components/Container';
import Header from '../../components/Header';

class App extends Component {
  render() {
    return (
      <Router>
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
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Header
                heading={{
                  title: 'Dream. Think. Code.',
                  description:
                    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis \n' +
                    'praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias \n' +
                    'excepturi sint occaecati cupiditate non provident,',
                }}
                heroes={[
                {
                  name: 'Programmer',
                  description: 'At vero eos et accusamus et iusto odio dignissimos',
                }, {
                  name: 'Designer',
                  description: 'At vero eos et accusamus et iusto odio dignissimos',
                }, {
                  name: 'Business Analyst',
                  description: 'At vero eos et accusamus et iusto odio dignissimos',
                },
                ]}
              />
            )}
          />
          <Route component={Header} />
        </Switch>

        {/* Content */}
        <Container>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
        </Container>
      </div>
      </Router>
    );
  }
}

export default App;
