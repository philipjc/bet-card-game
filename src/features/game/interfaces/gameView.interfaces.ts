
export enum BET_OPTIONS {
  high = 'HIGH',
  low = 'LOW',
}

export interface Bet {
  guess: string;
  currentCard: Card;
  win?: boolean;
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
  deck: Deck;
}

export interface GameView {
  playerName: string;
  initiatePlayer: boolean;
  turn: number;
  cardsView: CardsView;
  score: Score;
  bet: BetView;
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
