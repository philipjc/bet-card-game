import React from "react";
import {selectGameState} from "../../../reducer/gameViewSlice";
import GameViewStyles from "../../GameView.styled";
import {useAppSelector} from "../../../../app/hooks";
import {GameView} from "../../interfaces/gameView.interfaces";

const {
  NameStyled,
} = GameViewStyles;


export const SCORE_DATA = {
  player: {
    message: (name: string) => name.length > 1 ? `Welcome, ${name}` : ''
  },
  score: {
    win: (score: number) => score > 0 ? `Won: ${score}` : 'Won: 0',
    lose: (score: number) => score > 0 ? `Lost: ${score}` : 'Lost: 0',
  },
}

export function Score() {
  const gameState = useAppSelector(selectGameState);

  const {
    turn,
    playerName,
    score: { won, lost },
  }: GameView = gameState;

  return (
    <NameStyled>
      <h3>{SCORE_DATA.player.message(playerName)}</h3>
      {
        turn > 0 && (
          <>
            <h3>{SCORE_DATA.score.win(won)}</h3>
            <h3>{SCORE_DATA.score.lose(lost)}</h3>
          </>
        )
      }
    </NameStyled>
  )
}
