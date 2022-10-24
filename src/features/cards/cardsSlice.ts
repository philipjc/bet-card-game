import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../app/store';
import {fetchCards} from './cardsAPI';

export enum BET_OPTIONS {
  high = 'HIGH',
  low = 'LOW',
}

export interface Card {
  id: string;
  remaining: number;
}

export interface Deck {
  cards: Array<Card>;
  deck_id: string;
  remaining: number;
  success: boolean;
}

export interface Score {
  won: number;
  lost: number;
}

export interface CardsState {
  gameActive: boolean;
  fetchingCards: boolean;
  deck?: Deck | {};
  score: Score;
  bet: string;
}

const initialState: CardsState = {
  gameActive: false,
  fetchingCards: false,
  deck: {},
  score: {
    won: 0,
    lost: 0
  },
  bet: '',
};

// API call
export const getCardsAsync = createAsyncThunk(
  'cards/fetchCards',
  async (amount: number) => {
    // The value we return becomes the `fulfilled` action payload
    return await fetchCards(amount);
  }
);

// Reducer
export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    reducerName: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
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
export const selectCards = (state: RootState) => state;

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
