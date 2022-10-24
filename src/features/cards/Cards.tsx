import React from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getCardsAsync,
  selectCard,
} from './cardsSlice';

export function Cards() {
  const cards = useAppSelector(selectCard);
  const dispatch = useAppDispatch();


  return (
    <div className="cards">
      <h2>Cards</h2>

      <button
        className=""
        onClick={() => dispatch(getCardsAsync(12))}
      >
        Add Async
      </button>
    </div>
  )
}
