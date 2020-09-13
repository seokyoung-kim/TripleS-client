import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Header from 'components/common/header/Header';
import FilteredCardListContainer from 'containers/card/FilteredCardListContainer';
import Responsive from 'components/layouts/Responsive';

const WritersPage = () => {
  const { writer } = useParams();

  return (
    <Wrapper>
      <Header />
      <PageTitle>
        <h1>{`${writer}`}</h1>
      </PageTitle>
      <FilteredCardListContainer writer={writer} />
    </Wrapper>
  );
};

export default WritersPage;

const Wrapper = styled.div``;

const PageTitle = styled(Responsive)`
  margin-top: 3rem;

  h1 {
    font-weight: 600;
    font-size: 2rem;
  }
`;
