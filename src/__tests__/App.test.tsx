import React from 'react';
import {fireEvent} from "@testing-library/react";
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import App from '../app/App';

import {GAME_TITLE} from "../app/App";
import {GV_DATA} from "../features/game/GameArena";

describe('App tests', () => {

  it('will display game view', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(GAME_TITLE)).toBeInTheDocument();
    expect(await screen.findByTestId(GV_DATA.name)).toBeInTheDocument();
  });

  it('will display game view UI', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(await screen.findByTestId(GV_DATA.tests.ui)).toBeInTheDocument();
  });

  it('will test input', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const nameInput = await screen.findByTestId(GV_DATA.tests.input.name);
    const numberInput = await screen.findByTestId(GV_DATA.tests.input.cards);
    const nameAction = await screen.findByTestId(GV_DATA.tests.input.nameButton);

    expect(nameInput).toBeInTheDocument();
    fireEvent.input(nameInput, 'Geralt');

    expect(numberInput).toBeInTheDocument();
    fireEvent.input(numberInput, '10');

    expect(nameAction).toBeInTheDocument();

    fireEvent.click(nameAction);

    expect(store.getState().game.playerName).toEqual('');
    expect(store.getState().game.numberOfCards).toEqual('');

  });

});
