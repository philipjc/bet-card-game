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

export const CARDS_DATA = {
  playerGuess: (guess: string) => guess ? `You bet ${guess}ER...` : null,
  actionButton: (gameActive: boolean) => gameActive ? 'Go' : 'Play',
  cardAlt: 'A playing card',
  loader: {
    loaderColor: '#25363e',
    loaderSize: '100',
  }
};

export function Cards() {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector(selectGameState);
  const cardState = useAppSelector(selectCardView);

  const { bet: { loading, guess } } = gameState;
  const { currentCard, nextCard, deck: { cards, deck_id }, fetchingCards } = cardState;

  const GAME_ACTIVE = cards.length > 0;
  const LOADING = loading || fetchingCards;
  const PLAYER_GUESS = CARDS_DATA.playerGuess(guess);
  const SHOW_CARDS = GAME_ACTIVE && !LOADING;

  return (
    <CardsStyled>
      <CardActionsStyled>
        <PrimaryButton
          onClick={() =>
            GAME_ACTIVE
              ? dispatch(placeBetThunk({ guess, currentCard: currentCard[0], nextCard: nextCard[0] }))
              : dispatch(getCardsAsync(deck_id))}
        >
          {CARDS_DATA.actionButton(GAME_ACTIVE)}
        </PrimaryButton>
      </CardActionsStyled>

      <GuessStyled>{PLAYER_GUESS}</GuessStyled>

      <FallingLines
        color={CARDS_DATA.loader.loaderColor}
        width={CARDS_DATA.loader.loaderSize}
        visible={LOADING}
      />

      {
        SHOW_CARDS && (
          <CardStyled>
            <img src={currentCard[0]?.images.png} alt={CARDS_DATA.cardAlt} />
          </CardStyled>
        )
      }

    </CardsStyled>
  )
}
