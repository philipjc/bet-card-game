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

  const { playerName, initiatePlayer, cardsView: { deck: { cards } }} = gameState;

  const CARDS_LOADED = cards.length > 0;
  const PLAYER_INITIATED = initiatePlayer;
  const PLAYER_NOT_INITIATED = !initiatePlayer;
  const HIDE_NAME_INPUTS = playerName?.length > 1 && PLAYER_NOT_INITIATED;

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
                CARDS_LOADED && (
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
