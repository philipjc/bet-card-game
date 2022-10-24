import {GameView} from "./gameView.interfaces";

export const initialState: GameView = {
  playerName: '',
  initiatePlayer: false,
  gameActive: false,
  score: {
    won: 0,
    lost: 0
  },
  bet: '',
}
