import React from 'react';
import 'bulma/css/bulma.min.css';
import {ThemeProvider} from "styled-components";
import {mainTheme} from "../themes/main-theme";
import {GameArena} from "../features/game/GameArena";
import AppStyles from "./App.styled";
import {useGameState} from "../features/game/hooks/useGameState";

const { AppStyled } = AppStyles;

export const GAME_TITLE = 'Card Gamble';
export const GAME_SUB_TITLE = 'A game of luck...';

export const APP_DATA = {
  player: {
    message: (name: string) => name.length > 1 ? `: ${name}` : ''
  }
}

function App() {
  const { playerName } = useGameState();

  return (
    <ThemeProvider theme={mainTheme}>
      <AppStyled>
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">
              {GAME_TITLE} {APP_DATA.player.message(playerName)}
            </p>
            <p className="subtitle">
              {GAME_SUB_TITLE}
            </p>
          </div>
        </section>
        <GameArena />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
