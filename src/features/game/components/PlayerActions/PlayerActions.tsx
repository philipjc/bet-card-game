import React from "react";
import ButtonsStyles from "../../../../app-styled/Buttons.styled";
import PlayerActionsStyles from "./PlayerActions.styled";
import {BET_OPTIONS} from "../../interfaces/gameView.interfaces";
import {useAppDispatch} from "../../../../app/hooks";
import {placeBet} from '../../../reducer/gameViewSlice';
import {useGameState} from "../../hooks/useGameState";

const { PrimaryButton } = ButtonsStyles;
const { PlayerActionsStyled } = PlayerActionsStyles;

export const PA_DATA = {
  name: 'PlayerActions',
  heading: 'What will the next card be?',
  actions: {
    higher: 'Higher',
    lower: 'Lower',
  }
};

export function PlayerActions() {
  const dispatch = useAppDispatch();
  const { LOADING, GAME_OVER } = useGameState();

  return GAME_OVER ? null : (
    <PlayerActionsStyled data-testid={PA_DATA.name}>
      <h4>{PA_DATA.heading}</h4>

      <div>
        <PrimaryButton
          onClick={() => dispatch(placeBet(BET_OPTIONS.low))}
          disabled={LOADING}
        >
          {PA_DATA.actions.lower}
        </PrimaryButton>
        <PrimaryButton
          onClick={() => dispatch(placeBet(BET_OPTIONS.high))}
          disabled={LOADING}
        >
          {PA_DATA.actions.higher}
        </PrimaryButton>
      </div>
    </PlayerActionsStyled>
  )
}
