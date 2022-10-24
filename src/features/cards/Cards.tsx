import React from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getCardsAsync,
  selectCards,
} from './cardsSlice';

import CardsStyles from "./styled/Cards.styled";
import ButtonsStyles from "../../app-styled/Buttons.styled";

const {
  CardsStyled,
  CardStyled,
} = CardsStyles;

const {
  PrimaryButton,
} = ButtonsStyles;

export function Cards() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);
  const { deck: { cards: cardList, deck_id } } = cards;
  const card = cardList[0];

  console.log(card?.images.svg);

  return (
    <CardsStyled>
      <div>
        <PrimaryButton
          className=""
          onClick={() => dispatch(getCardsAsync(deck_id))}
        >
          Play
        </PrimaryButton>
      </div>

      <CardStyled>
        <img src={card?.images.png}/>
      </CardStyled>

    </CardsStyled>
  )
}
