import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import App from '../App';

import {GAME_TITLE} from "../App";
import {GV_DATA} from "../features/game/GameView";

describe('App tests', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  it('will display game view', async () => {
    expect(screen.getByText(GAME_TITLE)).toBeInTheDocument();
    expect(await screen.findByTestId(GV_DATA.name)).toBeInTheDocument();
  });

});
