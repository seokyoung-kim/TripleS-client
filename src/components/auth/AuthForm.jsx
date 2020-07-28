import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Responsive from 'components/layouts/Responsive';
import AuthButton from 'components/auth/AuthButton';
import colors from 'styles/colors';

const AuthForm = () => {
  return (
    <Fixed>
      <Wrapper>
        <LogoContainer>
          <img src={require('assets/images/logo.png')} alt="logo" />
        </LogoContainer>
        <AuthButtons>
          <AuthButton provider="google" />
          <AuthButton provider="naver" />
        </AuthButtons>
        <Back to="/">돌아가기</Back>
      </Wrapper>
    </Fixed>
  );
};

const Fixed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 400px;
  border-radius: 0.5rem;
  transform: translateY(-20%);
`;

const LogoContainer = styled.div`
  font-size: 2rem;
  margin: 1rem auto;
  margin-bottom: 2.5rem;

  img {
    width: 7.5rem;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-top: 1.5rem;
  }
`;

const Back = styled(Link)`
  margin-top: 3rem;
  color: ${colors.gray[3]};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

export default AuthForm;
