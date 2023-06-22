import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainJoin from './MainJoin';

describe('MainJoin', () => {
  test('renders correctly', () => {
    /*Creamos una instancia del renderizador utilizando renderer.create(). Dentro de la función create(), envolvemos el componente MainJoin dentro 
    de un BrowserRouter y le proporcionamos una prop basename con el valor "/". 
    Esto es necesario para simular un contexto de enrutamiento durante la prueba.*/
    const tree = renderer.create(
      <BrowserRouter basename="/">
        <MainJoin />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
