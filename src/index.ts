import { Suit, DeckOptions, Card, Deck } from './types';

function getCardValues() {
  const cards: string[] = [];

  for (let i = 2; i <= 10; i++) {
    cards.push(i.toString());
  }

  return cards.concat(['J', 'Q', 'K', 'A']);
}

export function buildDeck(options: DeckOptions = { includeJoker: true }) {
  const cardValues = getCardValues();
  const cards: Card[] = cardValues
    .map((value) => {
      return Object.values(Suit).map((suit) => ({
        suit,
        value,
      }));
    })
    .flat();

  if (options.includeJoker) {
    cards.push({ value: 'Joker' });
    cards.push({ value: 'Joker' });
  }

  return { cards };
}

export function shuffleDeck(deck: Deck): Deck {
  let m = deck.cards.length;
  let t;
  let i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = deck.cards[m];
    deck.cards[m] = deck.cards[i];
    deck.cards[i] = t;
  }

  return deck;
}
