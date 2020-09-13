import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardContainer from 'containers/card/CardContainer';
import Spinner from 'components/common/Spinner';

const ResponsiveWrapper = styled.div`
  min-height: 100vh;
  margin-top: 1rem;
  width: 100%;
  margin: 0 auto;
`;

const Grid = styled.div`
  padding: 3rem;
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
      <Grid>
        {cards &&
          cards[0] &&
          cards.map((card) => <CardContainer key={card.id} card={card} />)}
      </Grid>
    </ResponsiveWrapper>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf,
  isLoading: PropTypes.bool,
};

export default React.memo(CardList);
