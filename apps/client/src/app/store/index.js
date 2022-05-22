import { CommonReducer } from './commonReducer';
import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers, createStore } from 'redux';
// const reducer = combineReducers({
//   globalState: CommonReducer,
// });
// const store = createStore(reducer);

export const store = configureStore({
  reducer: {
    globalReducer: CommonReducer,
  },
  middleware: [],
});
