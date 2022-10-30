import React from "react";
import { Hearts } from 'react-loader-spinner'
import { useAppDispatch } from '../../../../app/hooks';
import {useGameState} from "../../hooks/useGameState";
import {
  placeBetThunk,
  getCardsAsync,
  restart,
} from "../../../reducer/gameViewSlice";
import {explode} from "../../../../app/animations/explode";

export const CARDS_DATA = {
  playerGuess: (guess: string) => guess ? `You bet ${guess}ER...?` : null,
  actionButton: (gameActive: boolean) => gameActive ? 'Place bet' : 'Play',
  noGuess: 'Waiting for your guess...',
  card: {
    cardAlt: 'A playing card',
    width: '226px',
    height: '314px',
  },
  loader: {
    loaderColor: '#04d1b2',
    loaderWidth: '200',
    loaderHeight: '200',
    aria: 'hearts-loading',
  }
};

export function Cards() {
  const dispatch = useAppDispatch();
  const {
    GAME_ACTIVE, PLACE_BET, GAME_CONFIG, NO_BET,
    LOADING, PLAYER_GUESS, SHOW_CARDS, CURRENT_CARD_IMG,
  } = useGameState();

  return (
    <>
      <section className="section is-medium is-flex is-flex-direction-column is-paddingless">
        <div className="container has-text-centered">
          {!GAME_ACTIVE && !LOADING && <h2 className="title is-3">To begin push play</h2>}
          {
            !GAME_ACTIVE && !LOADING && (
              <div className="content intro mt-6 mb-6">
                <h3>Welcome to the world of card guessing!</h3>
                <p>
                  Where mystery and intrigue go hand in hand. <strong>Are you tough enough. </strong>
                  Will you take on the challenge and come out triumphant? Or will you slip into the dark world
                  of regret?
                 </p>
                <p>Picking the wrong guess could mean the difference between internet sensation, or searching for the game to conquer.</p>
                <p>Dare you enter....</p>
              </div>
            )
          }
          <button
            className="button mr-2"
            onClick={() =>
              GAME_ACTIVE
                ? dispatch(placeBetThunk(PLACE_BET))
                : dispatch(getCardsAsync(GAME_CONFIG))}
            onMouseOver={(e) => explode(e.pageX, e.pageY)}
            disabled={LOADING || NO_BET}
          >
            {CARDS_DATA.actionButton(GAME_ACTIVE)}
          </button>

          {
            !GAME_ACTIVE && (
              <button
                onClick={() => dispatch(restart())}
                disabled={LOADING || NO_BET}
                className="button ml-2">
                Restart
              </button>
            )
          }
        </div>

        <div className="container has-text-centered mb-5 mt-5">
          <h4 className="subtitle is-4 mb-2 mt-2">{NO_BET ? CARDS_DATA.noGuess : PLAYER_GUESS}</h4>
        </div>


        <div className="container is-fluid mt-2 mb-5">
          <div className="is-flex is-justify-content-center">

            {
              LOADING && (
                <div
                  className="card tilt-n-move-shake"
                  style={{
                    width: CARDS_DATA.card.width,
                    height: CARDS_DATA.card.height,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Hearts
                    height={CARDS_DATA.loader.loaderHeight}
                    width={CARDS_DATA.loader.loaderWidth}
                    color={CARDS_DATA.loader.loaderColor}
                    visible={LOADING}
                    ariaLabel={CARDS_DATA.loader.aria}
                  />
                </div>
              )
            }

            {
              SHOW_CARDS && (
                <>
                  <div className="card">
                    <img
                      width={CARDS_DATA.card.width}
                      height={CARDS_DATA.card.height}
                      src={CURRENT_CARD_IMG}
                      alt={CARDS_DATA.card.cardAlt}
                    />
                  </div>
                </>
              )
            }

          </div>
        </div>
      </section>
    </>
  )
}
