import cardsReducer, {
} from '../../cards/cardsSlice';

import {CardsState} from "../cards.interfaces";

describe('cards reducer', () => {
  const initialState: CardsState = {
    fetchingCards: false,
    deck: {
      deck_id: '',
      remaining: 0,
      success: false,
      cards: [],
    }
  };

  it('should handle initial state', () => {
    expect(cardsReducer(undefined, { type: 'unknown' })).toEqual({
      ...initialState,
    });
  });

});
