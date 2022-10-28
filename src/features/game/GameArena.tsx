import React from "react";
import { useAppDispatch } from '../../app/hooks';
import { enterName } from '../reducer/gameViewSlice';
import GameViewStyles from "./GameView.styled";
import ButtonsStyles from '../../app-styled/Buttons.styled';

import {usePlayerEntry} from "./hooks/usePlayerEntry";
import {useGameState} from "./hooks/useGameState";
import {Cards} from "./components/Cards/Cards";
import {GameOver} from "./components/GameOver/GameOver";
import {PlayerActions} from "./components/PlayerActions/PlayerActions";
import {Score} from "./components/Score/Score";

const {
  GameViewStyled,
  NameEntryStyled,
} = GameViewStyles;

const {
  SecondaryButton,
} = ButtonsStyles;


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
  },
  tests: {
    ui: 'UI',
    input: {
      name: 'name-input-test',
      cards: 'number-input-test',
      nameButton: 'send-game-config',
    }
  },
}

export function GameArena() {
  const dispatch = useAppDispatch();
  const { playerName, GAME_OVER, GAME_ACTIVE, PLAYER_INITIATED } = useGameState();
  const { name, updateName, updateNumberOfCards, GAME_CONFIG } = usePlayerEntry();

  return (
    <GameViewStyled data-testid={GV_DATA.name}>

      <div className="UI" data-testid={GV_DATA.tests.ui}>
        { playerName.length < 1 &&
          <NameEntryStyled>
            <h2>{GV_DATA.player.heading}</h2>
            <input
              data-testid={GV_DATA.tests.input.name}
              type="text"
              onChange={(e) => updateName(e.target.value)}
            />
            <h2>{GV_DATA.player.headingTwo}</h2>
            <input
              data-testid={GV_DATA.tests.input.cards}
              type="number"
              onChange={(e) => {
              if (Number(e.target.value) > 3 || Number(e.target.value) < 53) {
                updateNumberOfCards(e.target.value);
              }}}
            />
            <SecondaryButton
              data-testid={GV_DATA.tests.input.nameButton}
              onClick={(e) => {
              if (name) {
                dispatch(enterName(GAME_CONFIG));
                updateName('');
                updateNumberOfCards('');
              }
            }}>{GV_DATA.gameEnter}</SecondaryButton>
          </NameEntryStyled>
        }

        {
          PLAYER_INITIATED && !GAME_OVER && (
            <Score />
          )
        }

        {
          PLAYER_INITIATED && !GAME_OVER ? (
            <>
              <Cards />
              {
                GAME_ACTIVE && (
                  <PlayerActions />
                )
              }
            </>
          ) : GAME_OVER ? (
            <GameOver />
          ) : null
        }

      </div>

    </GameViewStyled>
  )
}
