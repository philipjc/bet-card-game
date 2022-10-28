import React, {ReactElement} from "react";
import {BET_OPTIONS} from "../../interfaces/gameView.interfaces";
import {useAppDispatch} from "../../../../app/hooks";
import {placeBet} from '../../../reducer/gameViewSlice';
import {useGameState} from "../../hooks/useGameState";

export const PA_DATA = {
  name: 'PlayerActions',
  heading: 'What will the next card be?',
  actions: {
    higher: 'Higher',
    lower: 'Lower',
  }
};

export function PlayerActions(): ReactElement<string> {
  const dispatch = useAppDispatch();
  const { LOADING } = useGameState();

  return (
    <div className="container has-text-centered" data-testid={PA_DATA.name}>

      <h4 className="subtitle is-4 mb-5 mt-5">
        {PA_DATA.heading}
      </h4>

      <div>
        <button
          className="button mr-4"
          onClick={() => dispatch(placeBet(BET_OPTIONS.low))}
          disabled={LOADING}
        >
          {PA_DATA.actions.lower}
        </button>

        <button
          className="button ml-4"
          onClick={() => dispatch(placeBet(BET_OPTIONS.high))}
          disabled={LOADING}
        >
          {PA_DATA.actions.higher}
        </button>

      </div>
    </div>
  )
}
