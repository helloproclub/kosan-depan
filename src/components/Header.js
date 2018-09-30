import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeroIcon from '../images/header/hero_icon.png';
import HeroBackground from '../images/header/background_hero.png';
import NavBar from './NavBar';
import Container from './Container';

const HeaderHomepage = styled.div`
  min-height: 800px;
  background-color: rgba(56, 56, 95, 1);
  background: linear-gradient(
      to bottom,
      rgba(56, 56, 95, 0.0001) 0%,
      rgba(56, 56, 95, 1) 100%
    ),
    url(${HeroBackground});
  background-size: cover;
  border-bottom-right-radius: 70px;
`;

const HeaderContent = styled.div`
  margin-top: 280px;
  color: #ffffff;
`;

const Heading = styled.h1`
  margin: 0 0 24px;
  font-size: 48px;
  line-height: 44px;
`;

const Description = styled.p`
  margin-left: 3px;
  max-width: 565px;
  font-size: 14px;
  line-height: 26px;
`;

const HeroListing = styled.div`
  display: flex;
  direction: ltr;
  flex-direction: row;
  overflow: fragments;
  margin-top: 72px;
`;

const Hero = styled.div`
  display: inline;
  width: 255px;
  margin-right: 57px;
`;

const HeroName = styled.h5`
  margin: 0;
  margin-left: 20px;
  display: inline;
  font-size: 18px;
  line-height: 27px;
`;

const HeroDescription = styled.p`
  margin: 0;
  margin-top: 9px;
  margin-left: 52px;
  font-size: 14px;
  line-height: 26px;
`;

function Header(props) {
  if (props.heading) {
    const heroItems = props.heroes.map((hero) => {
      return (
        <Hero>
          <img src={HeroIcon} alt={hero.name} />
          <HeroName>{hero.name}</HeroName>
          <HeroDescription>
            {hero.description}
          </HeroDescription>
        </Hero>
      );
    });

    return (
      <HeaderHomepage>
        <Container>
          <NavBar homepage={props.heading} />
          <HeaderContent>
            <Heading>{props.heading.title}</Heading>
            <Description>{props.heading.description}</Description>
            <HeroListing>
              {heroItems}
            </HeroListing>
          </HeaderContent>
        </Container>
    </HeaderHomepage>
    );
  }
  return (
    <Container>
      <NavBar />
    </Container>
  );
}

Header.propTypes = {
  heading: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    heroes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
  }),
};

export default Header;
