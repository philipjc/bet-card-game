import {Bet} from "../interfaces/gameView.interfaces";
import {BET_OPTIONS} from "../interfaces/gameView.interfaces";

const ACE = 'ACE';
const KING = 'KING';
const QUEEN = 'QUEEN';
const JACK = 'JACK';

const SPADES = 'SPADES';
const HEARTS = 'HEARTS';
const DIAMONDS = 'DIAMONDS';
const CLUBS = 'CLUBS';

const HIGH_CARDS = [ACE, KING, QUEEN, JACK];
const HIGH_CARDS_MAP = new Map();
const SUITS_ORDER = new Map();

HIGH_CARDS_MAP.set(ACE, 4);
HIGH_CARDS_MAP.set(KING, 3);
HIGH_CARDS_MAP.set(QUEEN, 2);
HIGH_CARDS_MAP.set(JACK, 1);

SUITS_ORDER.set(SPADES, 4);
SUITS_ORDER.set(HEARTS, 3);
SUITS_ORDER.set(DIAMONDS, 2);
SUITS_ORDER.set(CLUBS, 1);

export async function calculateCards(bet: Bet) {
  return new Promise<boolean>(resolve => {

    const { currentCard, nextCard } = bet;
    const { value: currentCardValue, suit: currentCardSuit } = currentCard;
    const { value: nextCardValue, suit: nextCardSuit } = nextCard;

    const CURRENT_IS_HIGH_CARD = HIGH_CARDS.includes(currentCardValue);
    const NEXT_IS_HIGH_CARD = HIGH_CARDS.includes(nextCardValue);
    const BOTH_NUMBER_CARDS_EQUAL = Number(nextCardValue) === Number(currentCardValue);

    const BOTH_CARDS_ARE_HIGH_CARDS = CURRENT_IS_HIGH_CARD && NEXT_IS_HIGH_CARD;
    const BOTH_CARDS_ARE_NUMBERS = !CURRENT_IS_HIGH_CARD && !NEXT_IS_HIGH_CARD;
    const CURRENT_IS_HIGH_NEXT_IS_NUMBER = CURRENT_IS_HIGH_CARD && !NEXT_IS_HIGH_CARD;
    const CURRENT_IS_NUMBER_NEXT_IS_HIGH = !CURRENT_IS_HIGH_CARD && NEXT_IS_HIGH_CARD;

    if (BOTH_CARDS_ARE_HIGH_CARDS) {
      const current = HIGH_CARDS_MAP.get(currentCardValue);
      const next = HIGH_CARDS_MAP.get(nextCardValue);
      return bet.guess === BET_OPTIONS.low
        ? resolve(next < current)
        : resolve(next > current);
    }

    if (CURRENT_IS_HIGH_NEXT_IS_NUMBER) {
      return bet.guess === BET_OPTIONS.low
        ? resolve(true)
        : resolve(false);
    }

    if (CURRENT_IS_NUMBER_NEXT_IS_HIGH) {
      return bet.guess === BET_OPTIONS.low
        ? resolve(false)
        : resolve(true);
    }

    if (BOTH_CARDS_ARE_NUMBERS) {
      if (BOTH_NUMBER_CARDS_EQUAL) {
        const currentSuitVal = SUITS_ORDER.get(currentCardSuit);
        const nextSuitVal = SUITS_ORDER.get(nextCardSuit);

        return bet.guess === BET_OPTIONS.low
          ? resolve(Number(nextSuitVal) < Number(currentSuitVal))
          : resolve(Number(nextSuitVal) > Number(currentSuitVal));

      }
      return bet.guess === BET_OPTIONS.low
        ? resolve(Number(nextCardValue) < Number(currentCardValue))
        : resolve(Number(nextCardValue) > Number(currentCardValue));
    }
  })
}

export async function bettingResult(bet: Bet): Promise<boolean> {
  let result: boolean = false;
  await calculateCards(bet).then(res => {
    result = res;
  });
  return result;
}
