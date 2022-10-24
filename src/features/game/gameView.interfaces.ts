
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
  gameActive: boolean;
  score: Score;
  bet: string;
}
