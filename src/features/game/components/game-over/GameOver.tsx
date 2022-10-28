import React from "react";
import gameOverStyles from "./GameOver.styled";
import buttonsStyled from "../../../../app-styled/Buttons.styled";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {restart, selectGameState} from "../../../reducer/gameViewSlice";
import {newGame} from "../../../reducer/gameViewSlice";

const { GameOverStyled } = gameOverStyles;
const { PrimaryButton } = buttonsStyled;

export const GO_DATA = {
  heading: {
    win: 'You Win!',
    lose: 'Game Over',
  },
  score: {
    win: (score: number) => `Guesses won: ${score}`,
    lose: (score: number) => `Guesses lost: ${score}`,
  },
  gamesWon: (score: number) => `Games won: ${score}`,
  gamesLost: (score: number) => `Games lost: ${score}`,
  gamesDraw: (score: number) => `Games drew: ${score}`,
};

export function GameOver() {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector(selectGameState);

  const { score: { won, lost }, gamesWon, gamesLost, gamesDraw } = gameState;

  const GAME_OVER_TITLE = won > lost ? GO_DATA.heading.win : GO_DATA.heading.lose;
  const WON_AMOUNT = GO_DATA.score.win(won);
  const LOSE_AMOUNT = GO_DATA.score.lose(lost);
  const GAMES_WON = GO_DATA.gamesWon(gamesWon);
  const GAMES_LOST = GO_DATA.gamesLost(gamesLost);
  const GAMES_DRAW = GO_DATA.gamesDraw(gamesDraw);

  return (
    <GameOverStyled>

      <div className="game-info">
        <h2>{GAME_OVER_TITLE}</h2>

        <h3>This round</h3>
        <p>{WON_AMOUNT}</p>
        <p>{LOSE_AMOUNT}</p>

        <h3>Overall</h3>
        <p>{GAMES_WON}</p>
        <p>{GAMES_LOST}</p>
        <p>{GAMES_DRAW}</p>
      </div>

      <PrimaryButton onClick={() => dispatch(newGame())}>
        New game?
      </PrimaryButton>

      <PrimaryButton
        onClick={() => dispatch(restart())}
      >
        Restart
      </PrimaryButton>

    </GameOverStyled>
  )
}
