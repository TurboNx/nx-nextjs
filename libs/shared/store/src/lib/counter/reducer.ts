import { createReducer } from '@reduxjs/toolkit';
import { decrease, increase, incrementByAmount } from './actions';
import { CounterState } from './types';

const initialState: CounterState = {
  value: 0,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(increase, (state) => {
      state.value++;
    })
    .addCase(decrease, (state) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value -= action.payload;
    });
});
