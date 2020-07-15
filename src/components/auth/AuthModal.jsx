import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { CloseButtonIcon } from 'components/common/Icons';
import { hideModal } from 'redux/uiSlice';
import colors from 'styles/colors';

import NaverLoginButton from 'components/auth/naver/NaverLoginButton';
import GoogleLoginButton from 'components/auth/google/GoogleLoginButton';

const AuthModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(hideModal());
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
        <NaverLoginButton />
        <GoogleLoginButton />
      </AuthButtons>
    </Wrapper>
  );
};

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
    fill: ${colors.gray[4]};
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

export default AuthModal;
