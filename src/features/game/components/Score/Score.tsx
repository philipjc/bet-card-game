import React, {ReactElement} from "react";
import {useGameState} from "../../hooks/useGameState";

export const SCORE_DATA = {
  score: {
    win: {
      label: 'Won',
      value: (score: number) => score,
    },
    lose: {
      label: 'Lost',
      value: (score: number) => score,
    }
  },
}

export function Score(): ReactElement<string> {
  const { cards, score: { won, lost }, turn} = useGameState();

  return (
    <section className="section has-text-centered-desktop pb-4 pt-4">
      {
        turn > 0 && (
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">{SCORE_DATA.score.win.label}</p>
                <p className="title">{SCORE_DATA.score.win.value(won)}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">{SCORE_DATA.score.lose.label}</p>
                <p className="title">{SCORE_DATA.score.lose.value(lost)}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">{`Remaining`}</p>
                <p className="title">{cards.length - (won + lost)}</p>
              </div>
            </div>
          </nav>
        )
      }
    </section>
  )
}
