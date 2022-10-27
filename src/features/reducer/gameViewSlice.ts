import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../app/store';
import {initialState} from '../game/state/gameView.state';
import {fetchCards} from '../game/api/cardsAPI';
import {Bet} from "../game/interfaces/gameView.interfaces";
import {bettingResult} from "./helpers";


async function placeAsyncBet(bet: Bet) {
  return new Promise<Bet>((resolve) => {
    let result: boolean;

    bettingResult(bet).then(res => {
      result = res;
    });

    return setTimeout(() => {
      resolve({...bet, win: result});
    }, 1000);
  });
}

// API or async call
// The value we return becomes the `fulfilled` action payload
// ===========================================================
export const getCardsAsync = createAsyncThunk(
  'cards/fetchCards',
  async (id: string) => await fetchCards(id));

export const placeBetThunk = createAsyncThunk(
  'game-view/placeBet',
  async (bet: Bet) => await placeAsyncBet(bet));


const INT_ONE = 1;

// Reducer
// ===============================================
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

      // Fetch cards
      .addCase(getCardsAsync.pending, (state) => {
        state.cardsView.fetchingCards = true;
      })
      .addCase(getCardsAsync.fulfilled, (state, action) => {
        state.cardsView.deck = { ...state.cardsView.deck, ...action.payload };
        state.cardsView.currentCard = [action.payload.cards[state.turn]];
        state.cardsView.nextCard = [action.payload.cards[state.turn + 1]];
        state.cardsView.fetchingCards = false;
      })
      .addCase(getCardsAsync.rejected, (state) => {
        state.cardsView.fetchingCards = false;
      })

      // Place bet
      .addCase(placeBetThunk.pending, state => {
        state.bet.loading = true;
      })
      .addCase(placeBetThunk.fulfilled, (state, action: PayloadAction<Bet>) => {
        const { payload } = action;
        const newTurn = state.turn += 1;
        const newCurrentCard = newTurn;
        const newNextCard = (newTurn + 1);

        state.turn = newTurn;
        state.cardsView.currentCard = [state.cardsView.deck.cards[newCurrentCard]];
        state.cardsView.nextCard = [state.cardsView.deck.cards[newNextCard]];
        if (payload.win) {
          state.score.won = state.score.won += INT_ONE;
        } else {
          state.score.lost = state.score.lost += INT_ONE;
        }
        state.gameOver = state.turn === 2;
        state.bet.loading = false;
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

// Action exports
// ==============
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
