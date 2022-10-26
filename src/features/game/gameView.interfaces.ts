
export enum BET_OPTIONS {
  high = 'HIGH',
  low = 'LOW',
}

export interface Score {
  won: number;
  lost: number;
}

export interface GameView {
  playerName: string;
  initiatePlayer: boolean;
  score: Score;
  bet: {
    loading: boolean;
    guess: string;
  };
}
