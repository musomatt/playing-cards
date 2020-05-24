export enum Suit {
  HEARTS = '♥️',
  DIAMONDS = '♦️',
  CLUBS = '♣️',
  SPADES = '♠️',
}

export interface Card {
  suit?: string;
  value: string;
}

export interface Deck {
  cards: Card[];
}

export interface DeckOptions {
  includeJoker: boolean;
}
