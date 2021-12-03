import { createReducer } from '@reduxjs/toolkit';

import { loggedIn, loggedOut } from './actions';
import { AccountState } from './types';

const serializedUser = sessionStorage.getItem('user');
const cachedUser = serializedUser ? JSON.parse(serializedUser) : undefined;

const initialState: AccountState = {
  isLogin: !!cachedUser,
  user: cachedUser,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(loggedIn, (_, action) => {
      sessionStorage.setItem('user', JSON.stringify(action.payload));
      return {
        isLogin: true,
        user: action.payload,
      };
    })
    .addCase(loggedOut, (_, action) => {
      sessionStorage.removeItem('user');
      return {
        isLogin: false,
        user: undefined,
      };
    })
);
