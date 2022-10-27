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

  const { bet: { guess, loading } } = gameState;
  const { deck: { cards }, fetchingCards } = cardState;

  const GAME_ACTIVE = cards.length > 0;
  const NO_BET = GAME_ACTIVE && guess.length < 1;
  const LOADING = loading || fetchingCards;

  return (
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
