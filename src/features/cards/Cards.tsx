import React from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getCardsAsync,
  selectCards,
  selectCardDeck,
} from './cardsSlice';

import CardsStyles from "./styled/Cards.styled";
import ButtonsStyles from "../../app-styled/Buttons.styled";
import {selectGameState} from "../game/gameViewSlice";

const {
  CardsStyled,
  CardStyled,
  CardActionsStyled,
} = CardsStyles;

const {
  PrimaryButton,
} = ButtonsStyles;

export function Cards() {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector(selectGameState);

  const { gameView: game, cards: { currentCard, deck: { cards, deck_id }} } = gameState;


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
