import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: none;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s;
  width: 20rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  height: 3.5rem;
  font-family: 'Noto Sans KR';

  img {
    width: 1.25rem;
    margin-right: 2.5rem;
  }
`;

const AuthButton = ({ children, size = 'md', onClick, className }) => (
  <Wrapper size={size} onClick={onClick} className={className}>
    {children}
  </Wrapper>
);

export default AuthButton;
