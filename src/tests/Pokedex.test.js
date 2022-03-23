import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa a página Pokedex', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons ', () => {
    renderWithRouter(<App />);
    const titlePokedex = screen.getByText(/Encountered pokémons/i);
    expect(titlePokedex).toBeDefined();
  });

  it('Teste se é exibido o próximo Pokémon botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    const buttonPokedex = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(buttonPokedex).toBeDefined();
  });

  it('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);
    const pokeLength = screen.getAllByTestId('pokemon-name');
    expect(pokeLength).toHaveLength(1);
  });

  it('Teste se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);
    const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    const pokeLengthBtn = screen.getAllByTestId('pokemon-type-button');
    pokeLengthBtn.forEach((pokType) => {
      const typeOk = types.find((type) => type === pokType.innerHTML);
      expect(typeOk).toBeDefined();
    });
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    expect(allBtn).toBeInTheDocument();
    userEvent.click(allBtn);
    expect(allBtn).toBeInTheDocument();
  });
});
