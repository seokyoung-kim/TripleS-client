import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    modal: null,
  },
  reducers: {
    showModal: (state, { payload: content }) => {
      state.modal = content;
    },
    hideModal: (state) => {
      state.modal = null;
    },
  },
});

export const { showModal, hideModal } = uiSlice.actions;
export default uiSlice.reducer;
