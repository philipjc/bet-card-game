import React from 'react';
import {ThemeProvider} from "styled-components";
import {mainTheme} from "../themes/main-theme";
import {GameArena} from "../features/game/GameArena";
import AppStyles from "./App.styled";

const { AppStyled, AppHeader } = AppStyles;

export const GAME_TITLE = 'Card Gamble';

function playSound() {
  let ourAudio = document.createElement('audio'); // Create a audio element using the DOM
  ourAudio.style.display = "none"; // Hide the audio element
  ourAudio.src = '../assets/rolling.wav'; // Set resource to our URL
  ourAudio.autoplay = true; // Automatically play sound


  document.body.appendChild(ourAudio);
}

function App() {
  playSound();

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
