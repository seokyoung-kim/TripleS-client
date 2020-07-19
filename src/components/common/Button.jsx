import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from 'styles/colors';

const Wrapper = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.secondary[2]};
  border-radius: 1rem; 
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
  padding: 0;

  > div {
    width: 100%;  
    transition: all 0.1s;
    height: 2rem;
    padding: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center; 
  border-radius: 1rem; 
    box-shadow: -3px -3px 6px #fff;
  }

  /* &:hover {
    text-shadow: 0 0 0.01px ${colors.primary[2]},
      0 0 0.01px ${colors.primary[2]};
    border: 1px solid ${colors.primary[2]};
    color: ${colors.primary[2]};
  } */
`;

const Button = ({ children, size, onClick, className }) => (
  <Wrapper size={size} onClick={onClick} className={className}>
    <div>{children}</div>
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
