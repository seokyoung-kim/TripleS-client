const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const CALLBACK_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/login/callback'
    : process.env.REACT_APP_NAVER_CALLBACK_URL || '/';

const appendNaverButton = () => {
  if (document && document.querySelectorAll('#naverIdLogin').length === 0) {
    const naverId = document.createElement('div');
    naverId.id = 'naverIdLogin';
    naverId.style.position = 'absolute';
    naverId.style.top = '-10000px';
    document.body.appendChild(naverId);
  }
};

export const initNaverLogin = () => {
  appendNaverButton();

  const { naver } = window;

  const naverLogin = new naver.LoginWithNaverId({
    callbackUrl: CALLBACK_URL,
    clientId: NAVER_CLIENT_ID,
    isPopup: false,
    loginButton: { color: 'green', type: 3, height: 60 },
  });
  naverLogin.init();

  return naverLogin;
};

export default null;
