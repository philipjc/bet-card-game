import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { enterName, selectGameState } from '../reducer/gameViewSlice';
import GameViewStyles from "./GameView.styled";
import ButtonsStyles from '../../app-styled/Buttons.styled';

import {GameConfig, GameView} from "./interfaces/gameView.interfaces"
import {Cards} from "./components/Cards/Cards";
import {GameOver} from "./components/game-over/GameOver";
import {PlayerActions} from "./components/player-actions/PlayerActions";
import {Score} from "./components/score/Score";

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
  const gameState = useAppSelector(selectGameState);
  const [name, updateName] = useState('');
  const [numberOfCards, updateNumberOfCards] = useState('10');

  const {
    gameOver,
    playerName,
    initiatePlayer,
    cardsView: { deck: { cards } }}: GameView = gameState;

  const GAME_OVER: boolean = gameOver;
  const GAME_ACTIVE: boolean = cards.length > 0;
  const PLAYER_INITIATED: boolean = initiatePlayer;
  const GAME_CONFIG: GameConfig = {name, numberOfCards}

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
              if (Number(e.target.value) > 3) {
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
