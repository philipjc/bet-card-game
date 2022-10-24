import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../app/store';
import {initialState} from "./gameView.state";

// API call
// ========


// Reducer
// =======
export const gameViewSlice = createSlice({
  name: 'game-view',
  initialState,

  reducers: {
    enterName: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.playerName = payload;
    },
    hideNameInput: state => {
      state.initiatePlayer = true;
    },
    reducerName: (state, action: PayloadAction<number>) => {},
  },
});

// State selector
// ==============
export const selectGameView = (state: RootState) => state.gameView;

// Actions
// =======
export const { reducerName, enterName, hideNameInput } = gameViewSlice.actions;

// Thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const thunkName =
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      const currentValue = selectGameView(getState());
      if (currentValue) {
        dispatch(reducerName(amount));
      }
    };

export default gameViewSlice.reducer;
