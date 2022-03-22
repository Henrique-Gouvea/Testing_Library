import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Pokedex from '../components/Pokedex';

describe('Testa a página Pokedex', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons ', () => {
    renderWithRouter(<Pokedex />);
    const heading = screen.getByRole('heading',
      { level: 2, name: /Encountered pokémons/i });
    console.log(heading);
    expect(heading).toBeInTheDocument();
  });
});
