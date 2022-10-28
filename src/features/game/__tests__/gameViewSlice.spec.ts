import gameViewReducer, {
  enterName, newGame,
  placeBet, restart,
} from '../../reducer/gameViewSlice';

import {GameView} from "../interfaces/gameView.interfaces";

describe('game view reducer', () => {
  const initialState: GameView = {
    playerName: '',
    numberOfCards: '',
    initiatePlayer: false,
    score: {
      won: 0,
      lost: 0,
    },
    bet: {
      loading: false,
      guess: '',
    },
    turn: 0,
    cardsView: {
      fetchingCards: false,
      currentCard: [],
      nextCard: [],
      deck: {
        cards: [],
        deck_id: '',
        remaining: 0,
        success: false,
      },
    },
    gameOver: false,
    gamesWon: 0,
    gamesLost: 0,
    gamesDraw: 0,
  };

  it('should handle initial state', () => {
    const action = { type: 'unknown' };
    expect(gameViewReducer(undefined, action)).toEqual({
      ...initialState,
    });
  });

  it('will handle enterName action', () => {
    const action = {
      type: enterName,
      payload: { name: 'Geralt', numberOfCards: '10'},
    };
    expect(gameViewReducer({...initialState}, action))
      .toEqual({
      ...initialState,
      playerName: action.payload.name,
      numberOfCards: action.payload.numberOfCards,
      initiatePlayer: true,
    });
  });

  it('will handle place bet action', () => {
    const action = { payload: 'HIGHER', type: placeBet };
    expect(gameViewReducer({...initialState},  action)).toEqual({
      ...initialState,
      bet: {
        guess: action.payload,
        loading: false
      }
    })
  });

  it('will handle new game action', () => {
    const action = { payload: '', type: newGame };

    expect(gameViewReducer({
      ...initialState,
      cardsView: {
        fetchingCards: false,
        currentCard: [],
        nextCard: [],
        deck: {
          cards: [{
            images: {
              png: 'image',
              svg: 'image',
            },
            image: 'image',
            code: 'AD',
            value: 'AD',
            suit: 'ACE'
          }],
          deck_id: '',
          remaining: 0,
          success: true,
        }
      }
      }, action))
      .toEqual({
        ...initialState,
        turn: 0,
        gameOver: false,
        cardsView: {
          fetchingCards: false,
          nextCard: [],
          deck: {
          cards: [{
            images: {
              png: 'image',
              svg: 'image',
            },
            image: 'image',
            code: 'AD',
            value: 'AD',
            suit: 'ACE'
          }],
          deck_id: '',
          remaining: 0,
          success: true,
        },
        currentCard : [
          {
            images: {
              png: 'image',
              svg: 'image',
            },
            image: 'image',
            code: 'AD',
            value: 'AD',
            suit: 'ACE'
          }
        ],
      },
    })
  });

  it('will handle restart action', () => {
    const action = { type: restart};
    expect(gameViewReducer({
      ...initialState,
    }, action))
      .toEqual({
      playerName: '',
      numberOfCards: '',
      initiatePlayer: false,
      gameOver: false,
      turn: 0,
      cardsView: {
        currentCard: [],
        nextCard: [],
        fetchingCards: false,
        deck: {
          deck_id: "",
          remaining: 0,
          success: false,
          cards: [],
        }
      },
      score: {
        won: 0,
        lost: 0,
      },
      bet: {
        guess: '',
        loading: false,
      },
      gamesWon: 0,
      gamesLost: 0,
      gamesDraw: 0,
    })
  });

});
