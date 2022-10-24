import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../app/store';
import {initialState} from "./cards.state";
import {fetchCards} from './cards-api/cardsAPI';

// API call
// ========
export const getCardsAsync = createAsyncThunk(
  'cards/fetchCards',
  async (amount: number) => {
    // The value we return becomes the `fulfilled` action payload
    return await fetchCards(amount);
  }
);

// Reducer
// =======
export const cardSlice = createSlice({
  name: 'cards',
  initialState,

  reducers: {
    reducerName: (state, action: PayloadAction<number>) => {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCardsAsync.pending, (state) => {
        state.fetchingCards = true;
      })
      .addCase(getCardsAsync.fulfilled, (state, action) => {
        state.fetchingCards = false;
        console.log(action.payload);
        state.deck = { ...action.payload };
      })
      .addCase(getCardsAsync.rejected, (state) => {
        state.fetchingCards = false;
      });
  },
});

// State selector
// ==============
export const selectCards = (state: RootState) => state.cards;

// Actions
// =======
export const { reducerName } = cardSlice.actions;

// Thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const thunkName =
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      const currentValue = selectCards(getState());

      if (currentValue) {
        dispatch(reducerName(amount));
      }
    };

export default cardSlice.reducer;
