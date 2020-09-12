import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../redux/usersSlice';

const Wrapper = styled.div``;

const LoginCheckPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, authError } = useSelector(({ users }) => ({
    user: users.user,
  }));

  useEffect(() => {
    dispatch(verifyUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/');
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [user, history]);

  if (authError) {
    return <div>로그인 에러</div>;
  }

  return (
    <Wrapper>
      <>loading...</>
    </Wrapper>
  );
};

export default LoginCheckPage;
