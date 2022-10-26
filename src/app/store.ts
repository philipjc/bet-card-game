import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import gameViewReducer from '../features/game/gameViewSlice';
import cardReducer from '../features/cards/cardsSlice';

export const store = configureStore({
  reducer: {
    gameView: gameViewReducer,
    cards: cardReducer,
    game: combineReducers({gameView: gameViewReducer,
      cards: cardReducer,})
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
