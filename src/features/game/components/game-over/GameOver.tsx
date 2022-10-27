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
    win: (score: number) => `Games won: ${score}`,
    lose: (score: number) => `Games lost: ${score}`,
  }
};

export function GameOver() {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector(selectGameState);

  const { score: { won, lost } } = gameState;

  const GAME_OVER_TITLE = won > lost ? GO_DATA.heading.win : GO_DATA.heading.lose;
  const WON_AMOUNT = GO_DATA.score.win(won);
  const LOSE_AMOUNT = GO_DATA.score.lose(lost);

  return (
    <GameOverStyled>
      <h2>{GAME_OVER_TITLE}</h2>

      <p>{WON_AMOUNT}</p>
      <p>{LOSE_AMOUNT}</p>

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
