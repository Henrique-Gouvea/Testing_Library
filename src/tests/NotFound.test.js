import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testa a página NotFound', () => {
  it('Testa se  texto Page requested not found ', () => {
    renderWithRouter(<NotFound />);
    const heading = screen.getByRole('heading',
      { level: 2, name: /page requested not found crying emoji/i });
    expect(heading).toBeInTheDocument();
  });

  it('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif ', () => {
    renderWithRouter(<NotFound />);
    const IMG_NOT_FOUND = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const imageNotFound = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i });
    expect(imageNotFound.src).toEqual(IMG_NOT_FOUND);
  });
});
