
export function fetchCards(id = '') {
  const url = id.length > 0
    ? `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
    : 'https://deckofcardsapi.com/api/deck/new/draw/?count=3';

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
