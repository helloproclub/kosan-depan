import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  padding: 12px 42px;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 26px;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  background-color: #fc8412;
`;

const A = styled.a`
  ${buttonStyles};
`;

const StyledButton = styled.button`
  ${buttonStyles};
`;

function Button(props) {
  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick} target={props.target}>
      {Children.toArray(props.children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  return button;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
