import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const NavLink = styled(Link)`
  display: inline-block;
  vertical-align: top;
  margin-left: 32px;
  font-size: 16px;
  line-height: 58px;
  text-decoration: none;
  color: ${props => (props.homepage ? '#ffffff' : '#000000')};
`;

const Nav = styled.div`
  width: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
  height: 58px;
  text-align: right;
  display: block;
`;

function NavBar(props) {
  if (props.homepage) {
    return (
      <Nav>
        <Logo homepage />
        <NavLink homepage to="/">
          Home
        </NavLink>
        <NavLink homepage to="/">
          Blog
        </NavLink>
        <NavLink homepage to="/">
          Achievements
        </NavLink>
        <NavLink homepage to="/">
          Hall of Fame
        </NavLink>
      </Nav>
    );
  }
  return (
    <Nav>
      <Logo />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/">Achievements</NavLink>
      <NavLink to="/">Hall of Fame</NavLink>
    </Nav>
  );
}

NavBar.propTypes = {
  homepage: PropTypes.bool,
};
export default NavBar;
