import { createSlice } from '@reduxjs/toolkit';
import { getCard, getCardPlatform, getCardWriter } from 'api/cards';

const startLoading = (state) => {
  state.isLoading = true;
};

const loadingFailed = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cardList: null,
    card: null,
    cursors: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    getCardListStart: startLoading,
    getCardListSuccess: (state, { payload: cards }) => {
      state.cardList = cards.values;
      state.cursors = cards.cursors;
      state.isLoading = false;
      state.error = null;
    },
    getCardListFailure: loadingFailed,
    getMoreCardListSuccess: (state, { payload: cards }) => {
      console.log('--->', cards);
      state.cardList = [...state.cardList, ...cards.values];

      state.cursors = cards.cursors;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  getCardListStart,
  getCardListSuccess,
  getCardListFailure,
  getMoreCardListStart,
  getMoreCardListSuccess,
  getMoreCardListFailure,
} = cardsSlice.actions;
export default cardsSlice.reducer;

export const fetchCardList = () => async (dispatch) => {
  try {
    dispatch(getCardListStart());
    const { data } = await getCard();
    console.log(data);

    dispatch(getCardListSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(getCardListFailure(err.toString()));
  }
};

export const fetchMoreCardList = (next) => async (dispatch) => {
  console.log('fetch more');
  try {
    const { data } = await getCard(next);
    console.log(data);

    dispatch(getMoreCardListSuccess(data));
  } catch (err) {
    console.log(err);
  }
};

export const fetchPlatformCardList = ({ platform }) => async (dispatch) => {
  try {
    dispatch(getCardListStart());
    const { data } = await getCardPlatform({ platform });
    console.log(data);
    dispatch(getCardListSuccess(data.slice(0, 50)));
  } catch (err) {
    console.log(err);
    dispatch(getCardListFailure(err.toString()));
  }
};

export const fetchWriterCardList = ({ writer }) => async (dispatch) => {
  try {
    dispatch(getCardListStart());
    const { data } = await getCardWriter({ writer });
    console.log(data);
    dispatch(getCardListSuccess(data.slice(0, 50)));
  } catch (err) {
    console.log(err);
    dispatch(getCardListFailure(err.toString()));
  }
};
