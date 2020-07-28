import React from 'react';
import styled from 'styled-components';

import AuthContainer from 'containers/auth/AuthContainer';

const Wrapper = styled.div``;

const AuthPage = () => {
  return (
    <Wrapper>
      <AuthContainer />
    </Wrapper>
  );
};

export default AuthPage;
