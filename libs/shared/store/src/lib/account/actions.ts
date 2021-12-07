import { createAction } from '@reduxjs/toolkit';
import { User } from '@nx-nextjs/shared/types';

export const loggedIn = createAction<User>('account/loggedIn');
export const loggedOut = createAction('account/loggedOut');
