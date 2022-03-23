import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente PokemonDetails', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
    const btnMore = screen.getByRole('link', { name: /More/ });
    userEvent.click(btnMore);
  });
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas', () => {
    const titlePokedex = screen.getByText(/Pikachu Details/i);
    expect(titlePokedex).toBeDefined();

    const summary = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(summary).toBeDefined();

    const linkMoreDetails = screen.queryByRole('link', { name: /more details/i });
    expect(linkMoreDetails).not.toBeInTheDocument();

    const details = screen.getByText(/This intelligent Pokémon roasts hard berries/i);
    expect(details).toBeInTheDocument();
  });
  it('Teste se existe na página uma seção com os mapas', () => {
    const locationPika = screen.getByRole('heading', {
      level: 2,
      name: /Game Locations of Pikachu/i,
    });
    expect(locationPika).toBeInTheDocument();

    const viridian = screen.getByText(/Kanto Viridian Forest/i);
    expect(viridian).toBeInTheDocument();

    const power = screen.getByText(/Kanto Power Plant/i);
    expect(power).toBeInTheDocument();

    const imgsKanto = screen.getAllByRole('img');
    expect(imgsKanto[0].src).toEqual('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(imgsKanto[1].src).toEqual('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgsKanto[0].alt).toEqual('Pikachu sprite');
    expect(imgsKanto[1].alt).toEqual('Pikachu location');
  });

  it('Teste se o usuário pode favoritar um pokémon.', () => {
    const checkFavorite = screen.getByRole('checkbox', { name: /pokémon favoritado ?/i });
    expect(checkFavorite).toBeInTheDocument();

    userEvent.click(checkFavorite);

    const btnDetails = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(btnDetails);

    const pikachuFav = screen.getByText(/Pikachu/i);
    expect(pikachuFav).toBeInTheDocument();
  });
});
