import { configureStore, combineReducers } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import usersReducer from './usersSlice';
import cardsReducer from './cardsSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  users: usersReducer,
  cards: cardsReducer,
});

export default configureStore({
  reducer: rootReducer,
});
