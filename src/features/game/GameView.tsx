import React from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { enterName, selectGameView } from './gameViewSlice';
import GameViewStyles from "./styled/GameView.styled";

const { GameViewStyled } = GameViewStyles;

export function GameView() {
  const dispatch = useAppDispatch();
  const game = useAppSelector(selectGameView);
  const { playerName, gameActive } = game;

  return (
    <GameViewStyled>

      {
        !gameActive && (
          <div className="GameView__name-entry">
            <h2>Please enter your name</h2>
            <input onChange={(e) => dispatch(enterName(e.target.value))} type="text" />
          </div>
        )
      }

      <div className="GameView__name">
        <h3>Welcome, {playerName}</h3>
      </div>

      {
        playerName.length > 1 && (
          <div className="GameView__activate">
            <button onClick={() => {}}>
              Let's begin
            </button>
          </div>
        )
      }
    </GameViewStyled>
  )
}
