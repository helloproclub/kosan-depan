import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmptyComponent from  'react-component-empty';
import FacebookSrc from '../../images/social/facebook.png';
import TwitterSrc from '../../images/social/twitter.png';
import InstagramSrc from '../../images/social/instagram.png';
import LineSrc from '../../images/social/line.png';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seIndexing: process.env.NODE_ENV === 'production' ? <EmptyComponent/> : <meta name="robots" content="noindex" />,
    }
  }
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
          {this.state.seIndexing}
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

        <Footer
          greeting={{
            text: `Do you have something to discuss with us? Let's talk about it.`,
            href: 'http://go.hellopro.club/telegram',
            button_text: 'Get in touch',
          }}
          copyright="2018 © Proclub Laboratory. All rights reserved. Crafted with ♥ at Telkom University"
          socials={[
            {
              title: 'Facebook Hello Proclub',
              href: 'https://www.facebook.com/helloproclub',
              icon_src: FacebookSrc,
            }, {
              title: 'Twitter Hello Proclub',
              href: 'https://www.twitter.com/helloproclub',
              icon_src: TwitterSrc,
            }, {
              title: 'Instagram Hello Proclub',
              href: 'https://www.instagram.com/helloproclub',
              icon_src: InstagramSrc,
            }, {
              title: 'Line@ Hello Proclub',
              href: 'https://line.me/ti/p/%40kau3131h',
              icon_src: LineSrc,
            },
          ]}
        />
      </div>
      </Router>
    );
  }
}

export default App;
