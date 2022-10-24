import React from 'react';
import {ThemeProvider} from "styled-components";
import {mainTheme} from "./themes/main-theme";
import {GameView} from "./features/game/GameView";
import {Cards} from "./features/cards/Cards";
import {useAppSelector} from "./app/hooks";
import {selectGameView} from "./features/game/gameViewSlice";
import AppStyles from "./App.styled";

const { AppStyled, AppHeader } = AppStyles;

export const GAME_TITLE = 'Title of the Game';

function App() {
  const game = useAppSelector(selectGameView);
  const { gameActive } = game;

  return (
    <ThemeProvider theme={mainTheme}>
      <AppStyled>

        <AppHeader>{GAME_TITLE}</AppHeader>

        <GameView />

        {gameActive && (<Cards />)}

      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
