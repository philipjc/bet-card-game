
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

export interface CardsState {
  deck?: Deck | {};
  fetchingCards: boolean;
}
