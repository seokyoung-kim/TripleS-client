import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardList from 'components/card/CardList';

import { fetchCardList } from 'redux/cardsSlice';
import { mapCardList } from 'libs/utils';

const CardListContainer = () => {
  const [mappedCardList, setMappedCardList] = useState([]);
  const dispatch = useDispatch();

  const { cardList, isLoading, error: cardsError } = useSelector(
    ({ cards }) => cards,
  );

  useEffect(() => {
    dispatch(fetchCardList());
  }, [dispatch]);

  useEffect(() => {
    if (cardList) {
      const newList = mapCardList(cardList);
      setMappedCardList(newList);
    }
  }, [cardList]);

  if (cardsError) {
    return <div>{cardsError.toString()}</div>;
  }
  console.log(mappedCardList);

  return (
    <>
      <CardList cards={mappedCardList} isLoading={isLoading} />
    </>
  );
};

export default React.memo(CardListContainer);
