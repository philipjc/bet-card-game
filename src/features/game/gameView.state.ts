import {GameView} from "./gameView.interfaces";

export const initialState: GameView = {
  playerName: 'Geralt',
  initiatePlayer: false,
  score: {
    won: 0,
    lost: 0
  },
  bet: '',
}
