import React from "react";
import { FallingLines } from 'react-loader-spinner'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getCardsAsync,
} from './cardsSlice';

import CardsStyles from "./styled/Cards.styled";
import ButtonsStyles from "../../app-styled/Buttons.styled";
import {selectGameState} from "../game/gameViewSlice";

const {
  CardsStyled,
  CardStyled,
  CardActionsStyled,
  GuessStyled,
} = CardsStyles;

const {
  PrimaryButton,
} = ButtonsStyles;

export function Cards() {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector(selectGameState);

  const { gameView: game, cards: cardsList } = gameState;
  const { currentCard, deck: { cards, deck_id }} = cardsList;
  const { bet } = game;
  const { loading, guess } = bet;

  const GAME_ACTIVE = cards.length > 0;

  return (
    <CardsStyled>

      <CardActionsStyled>
        <PrimaryButton
          className=""
          onClick={() => dispatch(getCardsAsync(deck_id))}
        >
          Play
        </PrimaryButton>
      </CardActionsStyled>

      <GuessStyled>{guess}</GuessStyled>

      {
        loading && (
          <FallingLines
            color="#ecfb77"
            width="100"
            visible={true}
          />
        )
      }

      {
        GAME_ACTIVE && (
          <CardStyled>
            <img src={currentCard[0]?.images.png} alt="A playing card"/>
          </CardStyled>
        )
      }

    </CardsStyled>
  )
}
