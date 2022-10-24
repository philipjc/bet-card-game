import React from 'react';
import {ThemeProvider} from "styled-components";
import {mainTheme} from "./themes/main-theme";
import {GameView} from "./features/game/GameView";
import {Cards} from "./features/cards/Cards";

export const GAME_TITLE = 'Title of the Game';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <header className="App-header">
          <h1>{GAME_TITLE}</h1>
        </header>

        <GameView />
        <Cards />

      </div>
    </ThemeProvider>
  );
}

export default App;
