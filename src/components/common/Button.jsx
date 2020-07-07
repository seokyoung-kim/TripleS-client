import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: white;
  border: none;
  height: 2rem;
  padding: 0 1rem;
  color: ${(props) => props.theme.colors.secondary[2]};
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.secondary[3]};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    text-shadow: 0 0 0.01px ${(props) => props.theme.colors.primary[2]},
      0 0 0.01px ${(props) => props.theme.colors.primary[2]};
    border: 1px solid ${(props) => props.theme.colors.primary[2]};
    color: ${(props) => props.theme.colors.primary[2]};
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
