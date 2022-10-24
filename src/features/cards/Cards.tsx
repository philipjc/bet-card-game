import React from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getCardsAsync,
  selectCards,
} from './cardsSlice';

export function Cards() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);

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
