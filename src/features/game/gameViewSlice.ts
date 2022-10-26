import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../app/store';
import {initialState} from "./gameView.state";

async function placeAsyncBet(bet: string) {
  return new Promise<string>((resolve) => {
    return setTimeout(() => {
      resolve(bet);
    }, 5000);

  });
}

// API or async call
// ========
export const placeBetThunk = createAsyncThunk(
  'game-view/placeBet',
  async (bet: string) => {
    // The value we return becomes the `fulfilled` action payload
    return await placeAsyncBet(bet);
  }
);

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
    placeBet: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.bet.guess = payload;
    },
    reducerName: (state, action: PayloadAction<number>) => {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(placeBetThunk.pending, state => {
        state.bet.loading = true;
      })
      .addCase(placeBetThunk.fulfilled, (state, action) => {
        state.bet.loading = false;
        state.bet.guess = action.payload;
      })
      .addCase(placeBetThunk.rejected, state => {
        state.bet.loading = false;
      })
  }
});

// State selector
// ==============
export const selectGameView = (state: RootState) => state.gameView;
export const selectGameState = (state: RootState) => state;

// Actions
// =======
export const { reducerName, enterName, hideNameInput, placeBet } = gameViewSlice.actions;

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
