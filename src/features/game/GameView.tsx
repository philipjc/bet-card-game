import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { enterName, hideNameInput, selectGameState } from '../reducer/gameViewSlice';
import GameViewStyles from "./GameView.styled";
import ButtonsStyles from '../../app-styled/Buttons.styled';

import {Cards} from "./components/Cards/Cards";
import {GameOver} from "./components/game-over/GameOver";
import {PlayerActions} from "./components/player-actions/PlayerActions";

const {
  GameViewStyled,
  NameEntryStyled,
  NameStyled,
  InitiateStyled,
} = GameViewStyles;

const {
  PrimaryButton,
  SecondaryButton,
} = ButtonsStyles;


export const GV_DATA = {
  name: 'GameView',
  gameEnter: 'Enter',
  player: {
    heading: 'Please enter your name',
    message: 'Welcome,'
  },
  initiate: {
    button: 'Let\'s begin',
  }
}

export function GameView() {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector(selectGameState);
  const [name, updateName] = useState('');

  const {
    gameOver,
    playerName,
    initiatePlayer,
    score: { won, lost },
    cardsView: { deck: { cards } }} = gameState;

  const GAME_OVER = gameOver;
  const GAME_ACTIVE = cards.length > 0;
  const PLAYER_INITIATED = initiatePlayer;
  const PLAYER_NOT_INITIATED = !initiatePlayer;
  const HIDE_NAME_INPUTS = playerName?.length > 1 && PLAYER_NOT_INITIATED;
  const PLAYER_SCORE_WIN = `Score: Won: ${won}`;
  const PLAYER_SCORE_LOST = `Score: Lost: ${lost}`;

  return (
    <GameViewStyled data-testid={GV_DATA.name}>

      <div className="UI">
        <div className="UI__header"></div>

        { playerName.length < 1 &&
          <NameEntryStyled>
            <h2>{GV_DATA.player.heading}</h2>
            <input onChange={(e) => updateName(e.target.value)} type="text" />
            <SecondaryButton onClick={(e) => {
              if (name) {
                dispatch(enterName(name));
                updateName('');
              }
            }}>{GV_DATA.gameEnter}</SecondaryButton>
          </NameEntryStyled>
        }

        { !PLAYER_INITIATED &&
          playerName.length > 1 && (
            <InitiateStyled>
              <PrimaryButton onClick={() => dispatch(hideNameInput())}>
                {GV_DATA.initiate.button}
              </PrimaryButton>
            </InitiateStyled>
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
