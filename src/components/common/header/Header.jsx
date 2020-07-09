import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from 'components/common/header/SearchBar';
import Button from 'components/common/Button';
import AuthModal from 'components/auth/AuthModal';
import { showModal } from 'redux/modules/ui';
import Responsive from 'components/layouts/Responsive';

const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary[3]};
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
  height: 1.5rem;
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
  );
};

export default Header;
