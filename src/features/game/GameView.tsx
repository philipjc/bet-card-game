import React from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { enterName, hideNameInput, selectGameState } from '../reducer/gameViewSlice';
import GameViewStyles from "./styled/GameView.styled";
import ButtonsStyles from '../../app-styled/Buttons.styled';

import {Cards} from "./components/Cards/Cards";
import {PlayerActions} from "./components/player-actions/PlayerActions";

const {
  GameViewStyled,
  NameEntryStyled,
  NameStyled,
  InitiateStyled,
} = GameViewStyles;

const {
  PrimaryButton,
} = ButtonsStyles;


export const GV_DATA = {
  name: 'GameView',
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

  const { playerName, initiatePlayer, score: { won, lost }, cardsView: { deck: { cards } }} = gameState;

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

        {
          HIDE_NAME_INPUTS && (
            <NameEntryStyled>
              <h2>{GV_DATA.player.heading}</h2>
              <input onChange={(e) => dispatch(enterName(e.target.value))} type="text" />
            </NameEntryStyled>
          )
        }

        <NameStyled>
          <h3>{`${GV_DATA.player.message} ${playerName}`}</h3>
          {GAME_ACTIVE && <h3>{PLAYER_SCORE_WIN}</h3>}
          {GAME_ACTIVE && <h3>{PLAYER_SCORE_LOST}</h3>}
        </NameStyled>

        {
          HIDE_NAME_INPUTS && (
            <InitiateStyled>
              <PrimaryButton onClick={() => dispatch(hideNameInput())}>
                {GV_DATA.initiate.button}
              </PrimaryButton>
            </InitiateStyled>
          )
        }

        {
          PLAYER_INITIATED && (
            <>
              <Cards />
              {
                GAME_ACTIVE && (
                  <PlayerActions />
                )
              }
            </>
          )
        }

      </div>

    </GameViewStyled>
  )
}
