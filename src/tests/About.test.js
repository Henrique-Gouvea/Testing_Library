import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste About.js', () => {
  test('Teste se a página contém as informações sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    const informationPokedex = screen.getByText(/This application simulates a Pokédex/i);
    expect(informationPokedex).toBeInTheDocument();

    const headerPokedex = screen.getByText(/About Pokédex/i);
    expect(headerPokedex).toBeInTheDocument();

    const IMG_POKEDEX_SRC = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const imageAbout = screen.getByRole('img');
    expect(imageAbout.src).toEqual(IMG_POKEDEX_SRC);
  });
});
