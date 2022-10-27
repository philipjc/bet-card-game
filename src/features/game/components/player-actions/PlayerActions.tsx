import React from "react";
import ButtonsStyles from "../../../../app-styled/Buttons.styled";
import PlayerActionsStyles from "./PlayerActions.styled";
import {BET_OPTIONS} from "../../interfaces/gameView.interfaces";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {placeBet, selectCardView, selectGameState} from '../../../reducer/gameViewSlice';

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
  const gameState = useAppSelector(selectGameState);
  const cardState = useAppSelector(selectCardView);

  const { bet: { loading }, gameOver } = gameState;
  const { fetchingCards } = cardState;

  const LOADING = loading || fetchingCards;
  const GAME_OVER = gameOver;

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
