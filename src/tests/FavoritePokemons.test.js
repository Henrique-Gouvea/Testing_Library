import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

// const pokeMock = {
//   card: [
//     {
//       id: 4,
//       name: 'Charmander',
//       type: 'Fire',
//       averageWeight: {
//         value: '8.5',
//         measurementUnit: 'kg',
//       },
//       image: 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
//       moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
//       foundAt: [
//         {
//           location: 'Alola Route 3',
//           map: 'https://cdn2.bulbagarden.net/upload/9/93/Alola_Route_3_Map.png',
//         },
//         {
//           location: 'Kanto Route 3',
//           map: 'https://cdn2.bulbagarden.net/upload/4/4a/Kanto_Route_3_Map.png',
//         },
//         {
//           location: 'Kanto Route 4',
//           map: 'https://cdn2.bulbagarden.net/upload/2/24/Kanto_Route_4_Map.png',
//         },
//         {
//           location: 'Kanto Rock Tunnel',
//           map: 'https://cdn2.bulbagarden.net/upload/6/6f/Kanto_Rock_Tunnel_Map.png',
//         },
//       ],
//     },
//   ],
// };

describe('Teste FavoritePokemons.js', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');

    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });

  //   test('Verificando favoritos', async () => {
  //     global.fetch = jest.fn().mockResolvedValue({
  //       json: jest.fn().mockResolvedValue(pokeMock),
  //     });
  //     const { history } = renderWithRouter(<App />);
  //     history.push('/favorites');

//     const title = await screen.findByText(/fire/i);
//     expect(title).toBeDefined();
//   });
});
