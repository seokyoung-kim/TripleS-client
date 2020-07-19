import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import colors from 'styles/colors';
import SearchBar from 'components/common/header/SearchBar';
import Button from 'components/common/Button';
import AuthModal from 'components/auth/AuthModal';
import { showModal } from 'redux/uiSlice';
import Responsive from 'components/layouts/Responsive';

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  background-color: #f1f1f1;
  z-index: 99;
  /* border-bottom: 1px solid ${colors.secondary[3]}; */
`;

const Spacer = styled.div`
  width: 100%;
  height: 5rem;
`;

const HeaderContainer = styled(Responsive)`
  max-width: 1728px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled(Link)`
  height: 1.75rem;
  cursor: pointer;

  img {
    height: 100%;
  }
`;

const RightSection = styled.div``;

const Header = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      showModal({
        content: <AuthModal />,
      }),
    );
  };

  return (
    <>
      <Wrapper>
        <HeaderContainer>
          <Logo to="/">
            <img src={require('assets/images/logo.png')} alt="" />
          </Logo>
          <SearchBar />
          <RightSection>
            <Button onClick={onClick}>로그인</Button>
          </RightSection>
        </HeaderContainer>
      </Wrapper>
      <Spacer />
    </>
  );
};

export default Header;
