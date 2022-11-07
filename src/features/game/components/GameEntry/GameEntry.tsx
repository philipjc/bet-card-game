import React, {ReactElement} from "react";
import {enterName} from "../../reducer/gameViewSlice";
import {useAppDispatch} from "../../../../app/hooks";
import {usePlayerEntry} from "../../hooks/usePlayerEntry";

export const GE_DATA = {
  tests: {
    input: {
      name: 'name-input-test',
      cards: 'number-input-test',
      nameButton: 'send-game-config',
    }
  },
}

export function GameEntry(): ReactElement<string> {
  const dispatch = useAppDispatch();
  const { name, updateName, updateNumberOfCards, GAME_CONFIG } = usePlayerEntry();

  return (
    <div className="hero-body pt-4">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">
            Welcome to Card Gamble.
          </h1>
          <h2 className="subtitle pt-5 pb-4">
            A game of chance... ready to play?

          </h2>
          <div className="box">
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  data-testid={GE_DATA.tests.input.name}
                  onChange={(e) => updateName(e.target.value)}
                  className="input" type="text" placeholder="Enter your name"/>
              </p>
            </div>
          </div>
          <div className="box">
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  data-testid={GE_DATA.tests.input.cards}
                  onChange={(e) => {
                    if (Number(e.target.value) > 3 || Number(e.target.value) < 53) {
                      updateNumberOfCards(e.target.value);
                    }
                  }}
                  className="input" type="number" placeholder="Enter number of cards to play"/>
              </p>
            </div>
          </div>
          <div className="box">
            <div className="field is-grouped is-flex is-justify-content-center">
              <p className="control">
                <button
                  data-testid={GE_DATA.tests.input.nameButton}
                  onClick={(e) => {
                    if (name) {
                      dispatch(enterName(GAME_CONFIG));
                    }
                  }}
                  className="button is-info">
                  Play
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
