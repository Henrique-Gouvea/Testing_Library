import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste App.js', () => {
  test('Verifica Links da pagina', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeDefined();

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeDefined();

    const linkFavorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavorites).toBeDefined();
  });

  test('Verifica se ao clicar no link a pagina e redirecionada', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/home');
    expect(history.location.pathname).toBe('/home');

    history.push('/about');
    expect(history.location.pathname).toBe('/about');

    history.push('/favorites');
    expect(history.location.pathname).toBe('/favorites');
  });
});
