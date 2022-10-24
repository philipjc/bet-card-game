import {CardsState} from "./cards.interfaces";

export const initialState: CardsState = {
  fetchingCards: false,
  deck: {
    cards: [],
    deck_id: '',
    remaining: 0,
    success: false,
  },
};
