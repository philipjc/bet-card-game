import exp from "constants";

export enum BET_OPTIONS {
  high = 'HIGH',
  low = 'LOW',
}

export interface Bet {
  guess: string;
  currentCard: Card;
  nextCard: Card;
  win?: boolean;
}

export interface RequestConfig {
  deck_id: string;
  numberOfCards: string;
}

export interface GameConfig {
  name: string;
  numberOfCards: string;
}

export interface Score {
  won: number;
  lost: number;
}

export interface Deck {
  cards: Array<Card>;
  deck_id: string;
  remaining: number;
  success: boolean;
}

export interface BetView {
  loading: boolean;
  guess: string;
}

export interface CardsView {
  fetchingCards: boolean;
  currentCard: Array<Card>;
  nextCard: Array<Card>;
  deck: Deck;
}

export interface GameView {
  playerName: string;
  numberOfCards: string;
  initiatePlayer: boolean;
  turn: number;
  cardsView: CardsView;
  score: Score;
  bet: BetView;
  gameOver: boolean;
  gamesWon: number;
  gamesLost: number;
  gamesDraw: number;
}

interface Images {
  svg: string;
  png: string;
}

export interface Card {
  images: Images;
  code: string;
  image: string;
  value: string;
  suit: string
}
