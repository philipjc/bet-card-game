import React from "react";
import GameViewStyles from "./GameView.styled";
import {useGameState} from "./hooks/useGameState";
import {GameEntry} from "./components/GameEntry/GameEntry";
import {Cards} from "./components/Cards/Cards";
import {GameOver} from "./components/GameOver/GameOver";
import {PlayerActions} from "./components/PlayerActions/PlayerActions";
import {Score} from "./components/Score/Score";

const {
  GameViewStyled,
} = GameViewStyles;

export const GV_DATA = {
  name: 'GameView',
  gameEnter: 'Enter',
  player: {
    heading: 'Please enter your name',
    headingTwo: 'Number of cards?',
    message: (name: string) => name.length > 1 ? `Welcome, ${name}` : ''
  },
  initiate: {
    button: 'Let\'s begin',
  }
}

export function GameArena() {
  const { GAME_OVER, GAME_ACTIVE, PLAYER_INITIATED, NO_PLAYER_NAME } = useGameState();

  return (
    <GameViewStyled data-testid={GV_DATA.name}>
      {NO_PLAYER_NAME && <GameEntry />}

      {!GAME_OVER && !NO_PLAYER_NAME && <Score />}

        {
          PLAYER_INITIATED && !GAME_OVER ? (
            <>
              <Cards />
              {
                GAME_ACTIVE && !GAME_OVER && (
                  <PlayerActions />
                )
              }
            </>
          ) : GAME_OVER ? (
            <GameOver />
          ) : null
        }
    </GameViewStyled>
  )
}
