import React from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getCardsAsync,
  selectCards,
  selectCardDeck,
} from './cardsSlice';

import CardsStyles from "./styled/Cards.styled";
import ButtonsStyles from "../../app-styled/Buttons.styled";

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
  const cards = useAppSelector(selectCards);
  const cardDeck = useAppSelector(selectCardDeck);

  const { deck: { deck_id } } = cards;
  const currentCard = cardDeck[0];
  const GAME_ACTIVE = cardDeck.length > 0;

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
            <img src={currentCard?.images.png}/>
          </CardStyled>
        )
      }

    </CardsStyled>
  )
}
