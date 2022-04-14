import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste FavoritePokemons.js', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');

    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const favoriteClick = () => {
      const moreDetails = screen.getByRole('link', { name: /More details/i });
      userEvent.click(moreDetails);

      const checkbox = screen.getByRole('checkbox');
      userEvent.click(checkbox);
    };
    favoriteClick();
    const { history } = renderWithRouter(<App />);
    history.push('/home');
    const btnFire = screen.getByRole('button', { name: /fire/i });
    userEvent.click(btnFire);

    favoriteClick();

    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();
  });
});
