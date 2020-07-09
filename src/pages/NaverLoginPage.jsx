import React from 'react';
import styled from 'styled-components';
import NaverAuthButton from 'components/auth/NaverAuthButton';

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  padding: 1rem;
`;

const NaverLoginPage = () => (
  <Wrapper>
    <>처리중입니다</>

    <NaverAuthButton textMap="" type="" hidden />
  </Wrapper>
);

export default NaverLoginPage;
