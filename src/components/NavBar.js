import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const NavLink = styled(Link)`
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  line-height: 58px;
  text-decoration: none;
  color: ${props => (props.homepage ? '#ffffff' : '#000000')};
  
  @media (max-width: 576px) {
    line-height: 38px;
  }
`;

const NavLinkSeparator = styled.div`
  display: inline-block;
  width: 32px;
  
  @media (max-width: 576px) {
    width: 32px;
  }
`;

const NavLinkWrapper = styled.div`
  @media (max-width: 576px) {
    margin-top: 20px;
    clear: both;
    display: inline-block;
    padding-bottom: 20px;
    border-bottom: 4px double ${props => (props.homepage ? '#000' : '#fff')};;
  }
`;

const Nav = styled.div`
  width: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
  height: 58px;
  text-align: right;
  display: block;
  
  @media (max-width: 576px) {
    padding-top: 15px;
    height: auto;
    text-align: center;
    padding-bottom: 28px;
  }
`;

function NavBar(props) {
  if (props.homepage) {
    return (
      <Nav>
        <Logo homepage />
        <NavLinkWrapper>
          <NavLink homepage to="/">
            Home
          </NavLink>
          <NavLinkSeparator/>
          <NavLink homepage to="/">
            Blog
          </NavLink>
          <NavLinkSeparator/>
          <NavLink homepage to="/">
            Achievements
          </NavLink>
          <NavLinkSeparator/>
          <NavLink homepage to="/HallOfFame">
            Hall of Fame
          </NavLink>
        </NavLinkWrapper>
      </Nav>
    );
  }
  return (
    <Nav>
      <Logo />
      <NavLinkWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLinkSeparator/>
        <NavLink to="/">Blog</NavLink>
        <NavLinkSeparator/>
        <NavLink to="/">Achievements</NavLink>
        <NavLinkSeparator/>
        <NavLink to="/HallOfFame">Hall of Fame</NavLink>
      </NavLinkWrapper>
    </Nav>
  );
}

NavBar.propTypes = {
  homepage: PropTypes.bool,
};
export default NavBar;
