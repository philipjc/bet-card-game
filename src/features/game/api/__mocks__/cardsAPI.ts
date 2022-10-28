const cardsAPIResponse = {
  "success": true,
  "deck_id": "y9hc25bpx7tt",
  "cards": [
    {"code": "9H", "image": "https://deckofcardsapi.com/static/img/9H.png", "images": {"svg": "https://deckofcardsapi.com/static/img/9H.svg", "png": "https://deckofcardsapi.com/static/img/9H.png"}, "value": "9", "suit": "HEARTS"},
    {"code": "QS", "image": "https://deckofcardsapi.com/static/img/QS.png", "images": {"svg": "https://deckofcardsapi.com/static/img/QS.svg", "png": "https://deckofcardsapi.com/static/img/QS.png"}, "value": "QUEEN", "suit": "SPADES"},
    {"code": "0S", "image": "https://deckofcardsapi.com/static/img/0S.png", "images": {"svg": "https://deckofcardsapi.com/static/img/0S.svg", "png": "https://deckofcardsapi.com/static/img/0S.png"}, "value": "10", "suit": "SPADES"},
    {"code": "4H", "image": "https://deckofcardsapi.com/static/img/4H.png", "images": {"svg": "https://deckofcardsapi.com/static/img/4H.svg", "png": "https://deckofcardsapi.com/static/img/4H.png"}, "value": "4", "suit": "HEARTS"},
    {"code": "QH", "image": "https://deckofcardsapi.com/static/img/QH.png", "images": {"svg": "https://deckofcardsapi.com/static/img/QH.svg", "png": "https://deckofcardsapi.com/static/img/QH.png"}, "value": "QUEEN", "suit": "HEARTS"},
    {"code": "4D", "image": "https://deckofcardsapi.com/static/img/4D.png", "images": {"svg": "https://deckofcardsapi.com/static/img/4D.svg", "png": "https://deckofcardsapi.com/static/img/4D.png"}, "value": "4", "suit": "DIAMONDS"},
    {"code": "8D", "image": "https://deckofcardsapi.com/static/img/8D.png", "images": {"svg": "https://deckofcardsapi.com/static/img/8D.svg", "png": "https://deckofcardsapi.com/static/img/8D.png"}, "value": "8", "suit": "DIAMONDS"},
    {"code": "0D", "image": "https://deckofcardsapi.com/static/img/0D.png", "images": {"svg": "https://deckofcardsapi.com/static/img/0D.svg", "png": "https://deckofcardsapi.com/static/img/0D.png"}, "value": "10", "suit": "DIAMONDS"},
    {"code": "3S", "image": "https://deckofcardsapi.com/static/img/3S.png", "images": {"svg": "https://deckofcardsapi.com/static/img/3S.svg", "png": "https://deckofcardsapi.com/static/img/3S.png"}, "value": "3", "suit": "SPADES"},
    {"code": "9D", "image": "https://deckofcardsapi.com/static/img/9D.png", "images": {"svg": "https://deckofcardsapi.com/static/img/9D.svg", "png": "https://deckofcardsapi.com/static/img/9D.png"}, "value": "9", "suit": "DIAMONDS"}],
  "remaining": 42
};

export function fetchCards() {
  return Promise.resolve(cardsAPIResponse);
}
