import React from 'react';
import {ThemeProvider} from "styled-components";
import {mainTheme} from "../themes/main-theme";
import {GameArena} from "../features/game/GameArena";
import AppStyles from "./App.styled";

const { AppStyled, AppHeader } = AppStyles;

export const GAME_TITLE = 'Card Gamble';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppStyled>
        <AppHeader>{GAME_TITLE}</AppHeader>
        <GameArena />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
