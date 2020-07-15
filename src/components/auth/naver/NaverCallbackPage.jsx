import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logUserIn } from 'redux/usersSlice';
import Spinner from 'components/common/Spinner';
import { initNaverLogin } from './initNaverLogin';

const naverLoginCallback = (history, dispatch) => {
  const naverLogin = initNaverLogin();

  naverLogin.getLoginStatus(async (status) => {
    if (status) {
      const { email, name, profile_image } = naverLogin.user;
      const user = {
        email,
        name,
        profileImage: profile_image,
        loginProvider: 'naver',
      };
      console.log(user);

      localStorage.setItem('user', JSON.stringify(user));

      // 실제로는 서버에서 token을 받아왔을 경우에만 로그인 처리
      dispatch(logUserIn({ user }));

      history.push('/');
    } else {
      console.log('callback 처리에 실패하였습니다');
    }
  });
};

const NaverCallbackPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.href.includes('access_token')) {
      naverLoginCallback(history, dispatch);
    }
  }, [history, dispatch]);

  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export default NaverCallbackPage;
