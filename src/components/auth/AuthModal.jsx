import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CloseButtonIcon } from 'components/common/Icons';
import { hideModal } from 'redux/modules/ui';

import NaverAuthButton from './NaverAuthButton';
import GoogleAuthButton from './GoogleAuthButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 400px;
  border-radius: 0.5rem;
`;

const CloseButtonContainer = styled.div`
  text-align: right;

  svg {
    margin: 1rem;
    cursor: pointer;
    fill: ${(props) => props.theme.colors.gray[4]};
  }
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
    margin-top: 1rem;
  }
`;

const LoginToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
  font-size: 0.875rem;
`;

const AuthToggle = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.secondary[1]};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primary[1]};
  }
`;

const AuthDescription = styled.p`
  margin-right: 0.75rem;
`;

const AuthModal = () => {
  const [type, setType] = useState('login');
  const dispatch = useDispatch();

  const authToggle = () => {
    if (type === 'login') {
      setType('signup');
    }

    if (type === 'signup') {
      setType('login');
    }
  };

  const onClose = () => {
    dispatch(hideModal());
  };

  const textMap = {
    signup: '회원가입',
    login: '로그인',
  };

  return (
    <Wrapper>
      <CloseButtonContainer>
        <CloseButtonIcon onClick={onClose} />
      </CloseButtonContainer>
      <LogoContainer>
        <img src={require('assets/images/logo.png')} alt="logo" />
      </LogoContainer>
      <AuthButtons>
        <NaverAuthButton type={type} textMap={textMap} />
        <GoogleAuthButton type={type} textMap={textMap} />
      </AuthButtons>
      <LoginToggleWrapper>
        <AuthDescription>
          {type === 'signup'
            ? 'Triple S 회원이신가요?'
            : '아직 계정이 없으신가요?'}
        </AuthDescription>
        <AuthToggle onClick={authToggle}>
          {type === 'signup' ? '로그인' : '회원가입'}
        </AuthToggle>
      </LoginToggleWrapper>
    </Wrapper>
  );
};

export default AuthModal;
