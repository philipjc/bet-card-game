import {GameView} from "./gameView.interfaces";

export const initialState: GameView = {
  playerName: '',
  gameActive: false,
  score: {
    won: 0,
    lost: 0
  },
  bet: '',
}
