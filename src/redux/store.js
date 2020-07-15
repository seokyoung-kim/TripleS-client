import { configureStore, combineReducers } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import usersReducer from './usersSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  user: usersReducer,
});

export default configureStore({
  reducer: rootReducer,
});
