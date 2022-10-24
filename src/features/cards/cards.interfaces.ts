
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

export interface Deck {
  cards: Array<Card>;
  deck_id: string;
  remaining: number;
  success: boolean;
}

export interface CardsState {
  deck: Deck;
  fetchingCards: boolean;
}
