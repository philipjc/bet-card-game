
export function fetchCards(amount = 12) {
  return new Promise<{ data: {} }>((resolve) => {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1', {
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
