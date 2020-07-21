import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logUserIn } from 'redux/usersSlice';
import Spinner from 'components/common/Spinner';
import { initNaverLogin } from './initNaverLogin';

const NaverCallbackPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.href.includes('access_token')) {
      const naverLogin = initNaverLogin();
      naverLogin.getLoginStatus(async (status) => {
        if (status) {
          const accessToken = window.location.href.split('=')[1].split('&')[0];
          dispatch(logUserIn({ accessToken, provider: 'naver' }));

          history.push('/');
        } else {
          console.log('callback 처리에 실패하였습니다');
        }
      });
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
