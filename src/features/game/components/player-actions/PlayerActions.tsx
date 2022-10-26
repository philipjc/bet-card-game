import React from "react";
import ButtonsStyles from "../../../../app-styled/Buttons.styled";
import PlayerActionsStyles from "./PlayerActions.styled";
import {BET_OPTIONS} from "../../gameView.interfaces";
import {useAppDispatch} from "../../../../app/hooks";
import {placeBet, placeBetThunk} from '../../gameViewSlice';

const { PrimaryButton } = ButtonsStyles;
const { PlayerActionsStyled } = PlayerActionsStyles;

export const PA_DATA = {
  name: 'PlayerActions',
  heading: 'Place your bet',
};

export function PlayerActions() {
  const dispatch = useAppDispatch();

  return (
    <PlayerActionsStyled data-testid={PA_DATA.name}>
      <h4>{PA_DATA.heading}</h4>

      <div className="buttons">
        <PrimaryButton onClick={() => dispatch(placeBet(BET_OPTIONS.low))}>
          Lower
        </PrimaryButton>
        <PrimaryButton onClick={() => dispatch(placeBet(BET_OPTIONS.high))}>
          Higher
        </PrimaryButton>
      </div>
    </PlayerActionsStyled>
  )
}
