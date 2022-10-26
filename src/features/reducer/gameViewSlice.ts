import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../app/store';
import {initialState} from '../game/state/gameView.state';
import {fetchCards} from '../game/api/cardsAPI';
import {Bet} from "../game/interfaces/gameView.interfaces";

async function placeAsyncBet(bet: Bet) {
  return new Promise<Bet>((resolve) => {
    return setTimeout(() => {
      resolve(bet);
    }, 5000);
  });
}

// API or async call
// ========
export const getCardsAsync = createAsyncThunk(
  'cards/fetchCards',
  async (id: string) => {
    // The value we return becomes the `fulfilled` action payload
    return await fetchCards(id);
  }
);
// =======
export const placeBetThunk = createAsyncThunk(
  'game-view/placeBet',
  async (bet: Bet) => {
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
      console.log(payload)
      state.bet.guess = payload;
    },
    reducerName: (state, action: PayloadAction<number>) => {},
  },

  extraReducers: (builder) => {
    builder

      // Fetch cards
      .addCase(getCardsAsync.pending, (state) => {
        state.cardsView.fetchingCards = true;
      })
      .addCase(getCardsAsync.fulfilled, (state, action) => {
        state.cardsView.fetchingCards = false;
        state.cardsView.deck = { ...state.cardsView.deck, ...action.payload };
        state.cardsView.currentCard = action.payload.cards.slice(0, 1);
      })
      .addCase(getCardsAsync.rejected, (state) => {
        state.cardsView.fetchingCards = false;
      })

      // Place bet
      .addCase(placeBetThunk.pending, state => {
        state.bet.loading = true;
      })
      .addCase(placeBetThunk.fulfilled, (state, action: PayloadAction<Bet>) => {
        state.bet.loading = false;
        state.turn = state.turn += 1;
      })
      .addCase(placeBetThunk.rejected, state => {
        state.bet.loading = false;
      })
  }
});

// State selector
// ==============
export const selectGameState = (state: RootState) => state.game;
export const selectCardView = (state: RootState) => state.game.cardsView;

// Actions
// =======
export const { reducerName, enterName, hideNameInput, placeBet } = gameViewSlice.actions;

// Thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const thunkName =
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      const currentValue = selectGameState(getState());
      if (currentValue) {
        dispatch(reducerName(amount));
      }
    };

export default gameViewSlice.reducer;
