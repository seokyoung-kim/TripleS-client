import React, { useEffect } from 'react';

import AuthButton from '../AuthButton';
import { initNaverLogin } from './initNaverLogin';

const onLogin = () => {
  if (!document || !document.querySelector('#naverIdLogin').firstChild) return;
  const naverLoginButton = document.querySelector('#naverIdLogin').firstChild;
  naverLoginButton.click();
};

const NaverLoginButton = () => {
  useEffect(() => {
    if (!('browser' in process)) {
      return;
    }
    initNaverLogin();
  }, []);

  return <AuthButton type="naver" onClick={onLogin} />;
};

export default NaverLoginButton;
