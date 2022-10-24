import React from 'react';
import {GameView} from "./features/game/GameView";

export const GAME_TITLE = 'Title of the Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{GAME_TITLE}</h1>
      </header>

      <GameView />

    </div>
  );
}

export default App;
