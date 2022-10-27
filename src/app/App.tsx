import React from 'react';
import {ThemeProvider} from "styled-components";
import {mainTheme} from "../themes/main-theme";
import {GameView} from "../features/game/GameView";
import AppStyles from "./App.styled";

const { AppStyled, AppHeader } = AppStyles;

export const GAME_TITLE = 'Title of the Game';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppStyled>
        <AppHeader>{GAME_TITLE}</AppHeader>
        <GameView />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
