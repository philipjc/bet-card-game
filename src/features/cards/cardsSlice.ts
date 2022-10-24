import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
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
  reducers: {},

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
export const selectCard = (state: RootState) => state.cards;

export default cardSlice.reducer;
