import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from 'styles/colors';

const Wrapper = styled.button`
  background: linear-gradient(145deg, #f1f1f1, #eee);
  border: none;
  color: ${colors.primary[1]};
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25), -3px -3px 6px #fff;

  width: 100%;
  transition: all 0.1s;
  padding: 0.5rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: linear-gradient(145deg, #ddd, #ffffff);
  }

  &:active {
    box-shadow: inset 5px 5px 10px #cecece, inset -5px -5px 10px #ffffff;
    background: transparent;
  }
`;

const Button = ({ children, size, onClick, className }) => (
  <Wrapper size={size} onClick={onClick} className={className}>
    {children}
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  size: 'md',
  onClick: () => {},
  className: '',
};

export default Button;
