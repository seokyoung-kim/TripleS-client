import React from 'react';
import styled from 'styled-components';

import Header from 'components/common/header/Header';
import CardListContainer from 'containers/card/CardListContainer';

const Wrapper = styled.div``;

const CardPage = () => {
  return (
    <Wrapper>
      <Header />
      <CardListContainer />
    </Wrapper>
  );
};

export default CardPage;
