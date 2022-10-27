import React from "react";
import { Hearts } from 'react-loader-spinner'
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
  LoaderContainer,
} = CardsStyles;

const {
  PrimaryButton,
} = ButtonsStyles;

export const CARDS_DATA = {
  playerGuess: (guess: string) => guess ? `You bet ${guess}ER...` : null,
  actionButton: (gameActive: boolean) => gameActive ? 'Go' : 'Play',
  noGuess: 'Waiting for your guess...',
  card: {
    cardAlt: 'A playing card',
    width: '226px',
    height: '314px',
  },
  loader: {
    loaderColor: '#ecfb77',
    loaderWidth: '200',
    loaderHeight: '200',
    aria: 'hearts-loading',
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
  const NO_BET = GAME_ACTIVE && guess.length < 1;

  return (
    <CardsStyled>
      <CardActionsStyled>
        <PrimaryButton
          onClick={() =>
            GAME_ACTIVE
              ? dispatch(placeBetThunk({ guess, currentCard: currentCard[0], nextCard: nextCard[0] }))
              : dispatch(getCardsAsync(deck_id))}
          disabled={LOADING || NO_BET}
        >
          {CARDS_DATA.actionButton(GAME_ACTIVE)}
        </PrimaryButton>
      </CardActionsStyled>

      <GuessStyled>{NO_BET ? CARDS_DATA.noGuess : PLAYER_GUESS}</GuessStyled>

      {
        LOADING && (
          <LoaderContainer>
            <Hearts
              height={CARDS_DATA.loader.loaderHeight}
              width={CARDS_DATA.loader.loaderWidth}
              color={CARDS_DATA.loader.loaderColor}
              visible={LOADING}
              ariaLabel={CARDS_DATA.loader.aria}
            />
          </LoaderContainer>
        )
      }

      {
        SHOW_CARDS && (
          <CardStyled>
            <img
              width={CARDS_DATA.card.width}
              height={CARDS_DATA.card.height}
              src={currentCard[0]?.images.png}
              alt={CARDS_DATA.card.cardAlt}
            />
          </CardStyled>
        )
      }

    </CardsStyled>
  )
}
