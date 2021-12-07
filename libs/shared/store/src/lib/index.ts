import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';
import accountReducer from './account/reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { appApi } from '@nx-nextjs/shared/api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    account: accountReducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(appApi.middleware);
  },
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
