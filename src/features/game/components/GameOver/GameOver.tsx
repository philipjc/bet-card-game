import React from "react";
import {useAppDispatch} from "../../../../app/hooks";
import {restart} from "../../../reducer/gameViewSlice";
import {newGame} from "../../../reducer/gameViewSlice";
import {useGameState} from "../../hooks/useGameState";

export const GO_DATA = {
  heading: {
    win: 'You Win!',
    lose: 'Game Over',
  },
  score: {
    win: (score: number) => `Guesses won: ${score}`,
    lose: (score: number) => `Guesses lost: ${score}`,
  },
  gamesWon: (score: number) => `Games won: ${score}`,
  gamesLost: (score: number) => `Games lost: ${score}`,
  gamesDraw: (score: number) => `Games drew: ${score}`,
};

export function GameOver() {
  const dispatch = useAppDispatch();
  const { score: { won, lost}, gamesLost, gamesWon, gamesDraw } = useGameState();

  const GAME_OVER_TITLE = won > lost ? GO_DATA.heading.win : GO_DATA.heading.lose;
  const WON_AMOUNT = GO_DATA.score.win(won);
  const LOSE_AMOUNT = GO_DATA.score.lose(lost);
  const GAMES_WON = GO_DATA.gamesWon(gamesWon);
  const GAMES_LOST = GO_DATA.gamesLost(gamesLost);
  const GAMES_DRAW = GO_DATA.gamesDraw(gamesDraw);

  return (
    <div className="section is-primary has-text-centered">


      <div className="container is-bordered">
        <h2 className="subtitle is-underlined">{GAME_OVER_TITLE}</h2>

        <h3 className="subtitle">This round</h3>
        <h2 className="subtitle">{WON_AMOUNT}</h2>
        <h2 className="subtitle">{LOSE_AMOUNT}</h2>

        <h3 className="subtitle is-underlined">Overall</h3>
        <h2 className="subtitle">{GAMES_WON}</h2>
        <h2 className="subtitle">{GAMES_LOST}</h2>
        <h2 className="subtitle">{GAMES_DRAW}</h2>
      </div>

      <div className="container is-primary has-text-centered mt-6">
        <button className="button mr-2" onClick={() => dispatch(newGame())}>
          New game?
        </button>

        <button className="button ml-2"
                onClick={() => dispatch(restart())}
        >
          Restart
        </button>
      </div>

    </div>
  )
}
