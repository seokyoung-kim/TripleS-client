import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logUserIn } from 'redux/usersSlice';
import ui from 'libs/ui';
import { GoogleIcon } from 'components/common/Icons';
import AuthButton from 'components/auth/AuthButton';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = (data) => {
    const { email, name, imageUrl } = data.profileObj;
    const user = {
      email,
      name,
      profileImage: imageUrl,
      loginProvider: 'google',
    };

    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(logUserIn({ user }));

    ui.hideModal();

    // TODO: 원래 있었던 페이지 주소로 이동
    history.push('/');
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <AuthButton
          type="google"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <GoogleIcon size={20} />
          <p>구글 아이디로 로그인</p>
        </AuthButton>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleLoginButton;
