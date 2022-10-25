import React from "react";
import ButtonsStyles from "../../../../app-styled/Buttons.styled";
import PlayerActionsStyles from "./PlayerActions.styled";
import {BET_OPTIONS} from "../../gameView.interfaces";
import { enterName, hideNameInput,selectGameView } from '../../gameViewSlice';

const { PrimaryButton } = ButtonsStyles;
const { PlayerActionsStyled } = PlayerActionsStyles;

export const PA_DATA = {
  name: 'PlayerActions',
  heading: 'Place your bet',
};

export function PlayerActions() {

  return (
    <PlayerActionsStyled data-testid={PA_DATA.name}>
      <h4>{PA_DATA.heading}</h4>

      <div className="buttons">
        <PrimaryButton onClick={() => { console.log('lower') }}>
          Lower
        </PrimaryButton>
        <PrimaryButton onClick={() => { console.log('higher') }}>
          Higher
        </PrimaryButton>
      </div>
    </PlayerActionsStyled>
  )
}
