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
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-auto-rows: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
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

export default React.memo(CardList);
