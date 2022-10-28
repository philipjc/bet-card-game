import {Bet, Card, GameView, RequestConfig, Score} from "../interfaces/gameView.interfaces";
import {useAppSelector} from "../../../app/hooks";
import {selectGameState} from "../../reducer/gameViewSlice";
import {CARDS_DATA} from "../components/Cards/Cards";

export interface UseGameState {
  deck: object;
  cards: Array<Card>;
  gameOver: boolean;
  playerName: string;
  initiatePlayer: boolean;
  fetchingCards: boolean;
  nextCard: Array<Card>;
  currentCard: Array<Card>;
  score: Score;
  gamesWon: number;
  gamesDraw: number;
  gamesLost: number;
  GAME_ACTIVE: boolean;
  GAME_OVER: boolean;
  PLAYER_INITIATED: boolean;
  PLAYER_GUESS: string | null;
  PLACE_BET: Bet;
  NO_BET: boolean;
  SHOW_CARDS: boolean;
  GAME_CONFIG: RequestConfig;
  LOADING: boolean;
  CURRENT_CARD_IMG: string;
}

export function useGameState(): UseGameState {
  const gameState = useAppSelector(selectGameState);

  const {
    gameOver,
    playerName,
    initiatePlayer,
    score,
    gamesWon,
    gamesDraw,
    gamesLost,
    cardsView: { deck, fetchingCards, nextCard, currentCard },
  }: GameView = gameState;

  const { cards, deck_id } = deck;

  const GAME_OVER: boolean = gameOver;
  const GAME_ACTIVE: boolean = cards.length > 0;
  const PLAYER_INITIATED: boolean = initiatePlayer;

  const { bet: { loading, guess }, numberOfCards } = gameState;

  const LOADING = loading || fetchingCards;
  const PLAYER_GUESS = CARDS_DATA.playerGuess(guess);
  const SHOW_CARDS = GAME_ACTIVE && !LOADING;
  const NO_BET = GAME_ACTIVE && guess.length < 1;

  const GAME_CONFIG: RequestConfig = { deck_id, numberOfCards };
  const PLACE_BET: Bet = { guess, currentCard: currentCard[0], nextCard: nextCard[0] };
  const CURRENT_CARD_IMG = currentCard[0]?.images.png;

  return {
    deck,
    cards,
    gameOver,
    playerName,
    initiatePlayer,
    fetchingCards,
    nextCard,
    currentCard,
    score,
    gamesWon,
    gamesDraw,
    gamesLost,
    GAME_ACTIVE,
    GAME_OVER,
    PLAYER_INITIATED,
    PLAYER_GUESS,
    PLACE_BET,
    NO_BET,
    SHOW_CARDS,
    GAME_CONFIG,
    LOADING,
    CURRENT_CARD_IMG,
  }
}
