import cardsReducer, {
  CardsState,

} from '../../cards/cardsSlice';

describe('cards reducer', () => {
  const initialState: CardsState = {
    gameActive: false,
    fetchingCards: false,
    deck: {},
    score: {
      won: 0,
      lost: 0
    },
    bet: '',
  };

  it('should handle initial state', () => {
    expect(cardsReducer(undefined, { type: 'unknown' })).toEqual({
      ...initialState,
    });
  });

});
