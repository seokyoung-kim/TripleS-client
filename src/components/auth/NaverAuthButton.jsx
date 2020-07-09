import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ui from 'libs/ui';
import AuthButton from './AuthButton';

const NAVER_ID_SDK_URL =
  'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js';

const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const CALLBACK_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/login'
    : process.env.REACT_APP_NAVER_CALLBACK_URL || '/';

const initLoginButton = () => {
  if (!('browser' in process)) {
    return;
  }

  const onSuccess = (data) => {
    console.log(data);
    localStorage.setItem('user', 'data');
    ui.hideModal();
  };

  const onFailure = (result) => {
    console.error(result);
    localStorage.setItem('user', 'fail');
  };

  const { naver } = window;

  const naverLogin = new naver.LoginWithNaverId({
    callbackUrl: CALLBACK_URL,
    clientId: NAVER_CLIENT_ID,
    isPopup: true,
    loginButton: { color: 'white', type: 3, height: 48 },
  });

  naverLogin.init();

  if (!window.opener) {
    naver.successCallback = (data) => onSuccess(data);
    naver.failureCallback = onFailure;
  } else {
    naverLogin.getLoginStatus((status) => {
      if (status) {
        window.opener.naver.successCallback(naverLogin.user);
      } else {
        window.opener.failureCallback();
      }
      window.close();
    });
  }
};

const appendNaverButton = () => {
  if (document && document.querySelectorAll('#naverIdLogin').length === 0) {
    const naverId = document.createElement('div');
    naverId.id = 'naverIdLogin';
    naverId.style.position = 'absolute';
    naverId.style.top = '-10000px';
    document.body.appendChild(naverId);
  }
};

const loadScript = () => {
  if (document && document.querySelectorAll('#naver-login-sdk').length === 0) {
    const script = document.createElement('script');
    script.id = 'naver-login-sdk';
    script.src = NAVER_ID_SDK_URL;
    script.onload = () => initLoginButton();
    document.head.appendChild(script);
  }
};

const login = () => {
  if (!document || !document.querySelector('#naverIdLogin').firstChild) return;
  const naverLoginButton = document.querySelector('#naverIdLogin').firstChild;
  naverLoginButton.click();
};

const NaverAuthButton = ({ type, textMap, hidden }) => {
  useEffect(() => {
    if (!('browser' in process)) {
      return;
    }
    loadScript();
    appendNaverButton();
  }, []);

  return (
    <ButtonWrapper onClick={login} hidden={hidden}>
      <img src={require('assets/images/naver.png')} alt="naver" />
      <p> {`네이버 아이디로 ${textMap[type]}`}</p>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(AuthButton)`
  background-color: ${(props) => props.theme.colors.naver};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.naverHover};
  }

  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
    `}
`;

NaverAuthButton.propTypes = {
  type: PropTypes.string.isRequired,
  textMap: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
};

NaverAuthButton.defaultProps = {
  hidden: false,
};

export default NaverAuthButton;
