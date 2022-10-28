import {Dispatch, SetStateAction, useState} from "react";
import {GameConfig} from "../interfaces/gameView.interfaces";

export interface PlayerEntry {
  name: string;
  updateName: Dispatch<SetStateAction<string>>;
  numberOfCards: string
  updateNumberOfCards: Dispatch<SetStateAction<string>>;
  GAME_CONFIG: GameConfig;
}

export function usePlayerEntry(): PlayerEntry {
  const [name, updateName] = useState('');
  const [numberOfCards, updateNumberOfCards] = useState('10');

  const GAME_CONFIG: GameConfig = {name, numberOfCards}

  return {
    name,
    updateName,
    numberOfCards,
    updateNumberOfCards,
    GAME_CONFIG,
  }
}
