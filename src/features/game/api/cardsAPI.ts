import {RequestConfig} from "../interfaces/gameView.interfaces";

export function fetchCards(gameConfig: RequestConfig) {
  const url = gameConfig.deck_id.length > 0
    ? `https://deckofcardsapi.com/api/deck/${gameConfig.deck_id}/draw/?count=1`
    : `https://deckofcardsapi.com/api/deck/new/draw/?count=${gameConfig.numberOfCards}`;

  return new Promise<{ data: {}, cards: [] }>(resolve => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      // redirect: 'follow',
      referrerPolicy: 'no-referrer',
    }).then(response => resolve(response.json()));
  });
}
