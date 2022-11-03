import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../app/store';
import {initialState} from '../state/gameView.state';
import {fetchCards} from '../api/cardsAPI';
import {Bet, RequestConfig, GameView, GameConfig} from "../interfaces/gameView.interfaces";
import {bettingResult} from "./helpers";


async function placeAsyncBet(bet: Bet) {
  return new Promise<Bet>((resolve) => {
    let result: boolean;

    bettingResult(bet).then(res => {
      result = res;
    });

    return setTimeout(() => {
      resolve({...bet, win: result});
    }, 2000);
  });
}

// API or async call
// The value we return becomes the `fulfilled` action payload
// ===========================================================
export const getCardsAsync = createAsyncThunk(
  'cards/fetchCards',
  async (config: RequestConfig) => await fetchCards(config));

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
    enterName: (state: GameView, action: PayloadAction<GameConfig>) => {
      const { payload } = action;
      const numberOfCards = Number(payload.numberOfCards);
      state.initiatePlayer = true;
      state.playerName = payload.name;
      state.numberOfCards = numberOfCards > 52 ? '52' : numberOfCards < 3 ? '3' : payload.numberOfCards;
    },
    placeBet: (state: GameView, action: PayloadAction<string>) => {
      const { payload } = action;
      state.bet.guess = payload;
    },
    newGame: (state: GameView) => {
      state.gameOver = false;
      state.turn = 0;
      state.cardsView.currentCard = [state.cardsView.deck.cards[0]];
      state.score.won = 0;
      state.score.lost = 0;
      state.bet.guess = '';
      getCardsAsync({ deck_id: state.cardsView.deck.deck_id, numberOfCards: state.numberOfCards });
    },
    restart: (state: GameView) => {
      state.playerName = '';
      state.numberOfCards = '';
      state.initiatePlayer = false;
      state.gameOver = false;
      state.turn = 0;
      state.cardsView.currentCard = [];
      state.cardsView.nextCard = [];
      state.cardsView.deck.cards = [];
      state.score.won = 0;
      state.score.lost = 0;
      state.bet.guess = '';
      state.gamesWon = 0;
      state.gamesLost = 0;
      state.gamesDraw = 0;
    }
  },

  extraReducers: (builder) => {
    builder

      // Fetch cards
      .addCase(getCardsAsync.pending, (state: GameView) => {
        state.cardsView.fetchingCards = true;
      })
      .addCase(getCardsAsync.fulfilled, (state: GameView, action) => {
        state.cardsView.deck = { ...state.cardsView.deck, ...action.payload };
        state.cardsView.currentCard = [action.payload.cards[state.turn]];
        state.cardsView.nextCard = [action.payload.cards[state.turn + 1]];
        state.cardsView.fetchingCards = false;
      })
      .addCase(getCardsAsync.rejected, (state: GameView) => {
        state.cardsView.fetchingCards = false;
      })

      // Place bet
      .addCase(placeBetThunk.pending, (state: GameView) => {
        state.bet.loading = true;
      })
      .addCase(placeBetThunk.fulfilled, (state: GameView, action: PayloadAction<Bet>) => {
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
        state.gameOver = state.turn === Number(state.numberOfCards);
        if (state.gameOver) {
          state.gamesWon = state.score.won > state.score.lost ? state.gamesWon += 1 : state.gamesWon;
          state.gamesLost = state.score.won < state.score.lost ? state.gamesLost += 1 : state.gamesLost;
          state.gamesDraw = state.score.won === state.score.lost ? state.gamesDraw += 1 : state.gamesDraw;
        }
        state.bet.loading = false;
      })
      .addCase(placeBetThunk.rejected, (state: GameView) => {
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
export const { newGame, enterName, placeBet, restart } = gameViewSlice.actions;

// Reducer export
export default gameViewSlice.reducer;
