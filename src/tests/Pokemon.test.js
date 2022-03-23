import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa a página Pokemon', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon. ', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getByTestId(/pokemon-name/i);
    expect(pokemon).toHaveTextContent(/Pikachu/i);
    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent(/Electric/i);
    const weight = screen.getByTestId(/pokemon-weight/i);
    expect(weight).toHaveTextContent(/Average weight: 6.0 kg/i);
    const img = screen.getByAltText(/Pikachu sprite/i);
    const IMG_POKE = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(img).toHaveAttribute('src', IMG_POKE);
  });

  it('Teste card do Pokémon indicado na Pokédex contém um link de navegação ', () => {
    renderWithRouter(<App />);
    const linkPoke = screen.getByRole('link', { name: /details/ });
    expect(linkPoke.href).toContain('/pokemons/25');
  });
  const MORE_DETAILS = 'More details';
  it('Teste ao clicar no link do Pokémon, é feito o redirecionamento', () => {
    renderWithRouter(<App />);
    const btnDetails = screen.getByRole('link', { name: MORE_DETAILS });
    userEvent.click(btnDetails);
    const pokemonSumary = screen.getByText(/summary/i);
    expect(pokemonSumary).toBeInTheDocument();
  });

  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);
    const btnDetails = screen.getByRole('link', { name: MORE_DETAILS });
    userEvent.click(btnDetails);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('Teste ao clicar no link do Pokémon, é feito o redirecionamento', () => {
    renderWithRouter(<App />);
    const btnDetails = screen.getByRole('link', { name: MORE_DETAILS });
    userEvent.click(btnDetails);
    const btnFav = screen.getByRole('checkbox');
    userEvent.click(btnFav);
    const imgStar = screen.getAllByAltText(/Pikachu is marked/);
    expect(imgStar[0].src).toContain('/star-icon.svg');
  });
});
