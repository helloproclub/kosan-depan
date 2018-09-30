import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoHomePage from '../images/logo/white.png';
import LogoGeneral from '../images/logo/normal.png';

const LogoLink = styled(Link)`
  float: left;
  display: inline-block;
  vertical-align: top;
  height: 58px;
  line-height: 58px;
`;

function Logo(props) {
  let src;
  if (props.homepage) {
    src = LogoHomePage;
  } else {
    src = LogoGeneral;
  }
  return (
    <LogoLink to="/">
      <img src={src} alt="Proclub Universitas Telkom" />
    </LogoLink>
  );
}

Logo.propTypes = {
  homepage: PropTypes.bool,
};

export default Logo;
