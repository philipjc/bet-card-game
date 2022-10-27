import {GameView} from "../interfaces/gameView.interfaces";

const gameViewState = {
  fetchingCards: false,
  currentCard: [],
  nextCard: [],
  deck: {
    cards: [],
    deck_id: '',
    remaining: 0,
    success: false,
  },
};

const scoreState = {
  won: 0,
  lost: 0
};

const betViewState = {
  loading: false,
  guess: '',
};

export const initialState: GameView = {
  playerName: 'Geralt',
  initiatePlayer: false,
  turn: 0,
  cardsView: gameViewState,
  score: scoreState,
  bet: betViewState,
  gameOver: false,
}
