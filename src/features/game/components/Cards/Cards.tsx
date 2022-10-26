import React from "react";
import { FallingLines } from 'react-loader-spinner'
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';

import {
  selectGameState,
  selectCardView,
  placeBetThunk,
  getCardsAsync,
} from "../../../reducer/gameViewSlice";

import CardsStyles from "./Cards.styled";
import ButtonsStyles from "../../../../app-styled/Buttons.styled";

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
  const cardState = useAppSelector(selectCardView);

  const { bet: { loading, guess } } = gameState;
  const { currentCard, deck: { cards, deck_id }, fetchingCards } = cardState;

  const GAME_ACTIVE = cards.length > 0;
  const LOADING = loading || fetchingCards;

  return (
    <CardsStyled>

      <CardActionsStyled>
        <PrimaryButton
          className=""
          onClick={() => dispatch(getCardsAsync(deck_id))}
        >
          Play
        </PrimaryButton>
        <PrimaryButton
          className=""
          onClick={() => dispatch(placeBetThunk({ guess, currentCard: currentCard[0] }))}
        >
          Go
        </PrimaryButton>
      </CardActionsStyled>

      <GuessStyled>{guess}</GuessStyled>

      {
        LOADING && (
          <FallingLines
            color="#ecfb77"
            width="100"
            visible={true}
          />
        )
      }

      {
        GAME_ACTIVE && !LOADING && (
          <CardStyled>
            <img src={currentCard[0]?.images.png} alt="A playing card"/>
          </CardStyled>
        )
      }

    </CardsStyled>
  )
}
