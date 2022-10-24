import React from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { enterName, hideNameInput,selectGameView } from './gameViewSlice';
import GameViewStyles from "./styled/GameView.styled";
import ButtonsStyles from '../../app-styled/Buttons.styled';

import {Cards} from "../cards/Cards";

const {
  GameViewStyled,
  NameEntryStyled,
  NameStyled,
  InitiateStyled,
} = GameViewStyles;

const {
  PrimaryButton,
} = ButtonsStyles;


export const GV_DATA = {
  name: 'GameView',
}

export function GameView() {
  const dispatch = useAppDispatch();
  const game = useAppSelector(selectGameView);
  const { playerName, initiatePlayer } = game;

  const PLAYER_NOT_INITIATED = !initiatePlayer;
  const HIED_NAME_INPUTS = playerName.length > 1 && !initiatePlayer;

  return (
    <GameViewStyled data-testid="GameView">

      {
        PLAYER_NOT_INITIATED && (
          <NameEntryStyled>
            <h2>Please enter your name</h2>
            <input onChange={(e) => dispatch(enterName(e.target.value))} type="text" />
          </NameEntryStyled>
        )
      }

      <NameStyled>
        <h3>Welcome, {playerName}</h3>
      </NameStyled>

      {
        HIED_NAME_INPUTS && (
          <InitiateStyled>
            <PrimaryButton onClick={() => dispatch(hideNameInput())}>
              Let's begin
            </PrimaryButton>
          </InitiateStyled>
        )
      }

      {initiatePlayer && (<Cards />)}

    </GameViewStyled>
  )
}
