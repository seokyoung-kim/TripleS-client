import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Responsive from 'components/layouts/Responsive';
import CardContainer from 'containers/card/CardContainer';
import Spinner from 'components/common/Spinner';

const ResponsiveWrapper = styled(Responsive)`
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
  min-height: 100vh;
  margin-top: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 21rem);
  /* grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); */
  grid-auto-rows: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`;

const CardList = ({ cards, isLoading }) => {
  if (isLoading) {
    return (
      <Loading>
        <Spinner />
      </Loading>
    );
  }

  return (
    <ResponsiveWrapper>
      <Grid>{cards && cards.map((card) => <CardContainer card={card} />)}</Grid>
    </ResponsiveWrapper>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf,
  isLoading: PropTypes.bool,
};

export default CardList;
