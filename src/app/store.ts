import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameViewReducer from '../features/reducer/gameViewSlice';

export const store = configureStore({
  reducer: {
    game: gameViewReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
