import gameViewReducer, {
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
    expect(gameViewReducer(undefined, { type: 'unknown' })).toEqual({
      ...initialState,
    });
  });

  it('will handle entering a name', () => {
    expect(gameViewReducer({
      bet: '',
      initiatePlayer: false,
      playerName: 'Geralt',
      score: {
        lost: 0,
        won: 0,
      }}, { type: 'enterName' })).toEqual({
      ...initialState,
      playerName: 'Geralt',
    });
  });

  it('will handle hide name inputs', () => {
    expect(gameViewReducer({
      bet: '',
      initiatePlayer: false,
      playerName: 'Geralt',
      score: {
        lost: 0,
        won: 0,
      }}, { type: 'hideNameInput' })).toEqual({
      ...initialState,
      playerName: 'Geralt',
      initiatePlayer: true,
    });
  });

});
