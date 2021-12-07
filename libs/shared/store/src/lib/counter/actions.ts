import { createAction } from '@reduxjs/toolkit';

export const increase = createAction('counter/increase');
export const decrease = createAction('counter/decrease');
export const incrementByAmount = createAction<number>(
  'counter/incrementByAmount'
);
