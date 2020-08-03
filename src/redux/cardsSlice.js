import { createSlice } from '@reduxjs/toolkit';
import { getCard } from 'api/cards';

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
    isLoading: false,
    error: null,
  },
  reducers: {
    getCardListStart: startLoading,
    getCardListSuccess: (state, { payload: cards }) => {
      state.cardList = cards;
      state.isLoading = false;
      state.error = null;
    },
    getCardListFailure: loadingFailed,
  },
});

export const {
  getCardListStart,
  getCardListSuccess,
  getCardListFailure,
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
