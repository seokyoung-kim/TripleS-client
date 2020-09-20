import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardContainer from 'containers/card/CardContainer';
import Spinner from 'components/common/Spinner';
import { fetchMoreCardList } from 'redux/cardsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ResponsiveWrapper = styled.div`
  min-height: 100vh;
  margin-top: 1rem;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 10rem;
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
  padding-bottom: 3rem;
`;

const LoadingBlock = styled.div`
  position: relative;
  width: 100%;
  margin-top: -200vh;
  padding-top: 200vh;
`;

const CardList = ({ cards, isLoading }) => {
  const dispatch = useDispatch();

  const { cursors } = useSelector(({ cards }) => cards);
  const [target, setTarget] = useState(null);

  const onIntersect = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        dispatch(fetchMoreCardList(cursors?.next));
      }
    },
    [dispatch, cursors],
  );

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, onIntersect]);

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
      <LoadingBlock setTarget={setTarget} ref={setTarget}>
        <Spinner />
      </LoadingBlock>
    </ResponsiveWrapper>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf,
  isLoading: PropTypes.bool,
};

export default React.memo(CardList);
