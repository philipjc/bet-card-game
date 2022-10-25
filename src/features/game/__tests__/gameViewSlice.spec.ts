import gameViewReducer, {
  enterName,
  hideNameInput,
} from '../../game/gameViewSlice';

import {GameView} from "../gameView.interfaces";

describe('game view reducer', () => {
  const initialState: GameView = {
    playerName: '',
    initiatePlayer: false,
    score: {
      won: 0,
      lost: 0,
    },
    bet: '',
  };

  it('should handle initial state', () => {
    const action = { type: 'unknown' };
    expect(gameViewReducer(undefined, action)).toEqual({
      ...initialState,
    });
  });

  it('will handle entering a name', () => {
    const action = { type: enterName, payload: 'Geralt' };
    expect(gameViewReducer({...initialState}, action)).toEqual({
      ...initialState,
      playerName: action.payload,
    });
  });

  it('will handle hide name inputs', () => {
    const action = { type: hideNameInput };
    expect(gameViewReducer({...initialState}, action)).toEqual({
      ...initialState,
      initiatePlayer: true,
    });
  });

});
