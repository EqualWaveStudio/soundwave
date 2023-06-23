import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import FormValidation from './FormValidation';

let container = null;

beforeEach(() => {
  // Contenedor <div> en el DOM
  container = document.createElement('div');
  // Contenedor al cuerpo del documento
  document.body.appendChild(container);
});

afterEach(() => {
  // se limpia
  unmountComponentAtNode(container);
  // Se elimina el container
  container.remove();
  // se reestablece
  container = null;
});

it('should render the form', () => {
  /*función act, es una función proporcionada por react-dom/test-utils que se utiliza para envolver interacciones 
  y aserciones con componentes de React. Su propósito principal es asegurarse de 
  que todas las actualizaciones del componente se completen antes de continuar con las siguientes acciones*/
  act(() => {
// Renderizamos el componente FormValidation 
    render(<FormValidation />, container);
  });

  // Realizamos las aserciones para verificar que los elementos esperados estén presentes en el contenedor renderizado
  expect(container.querySelector('label[for="name"]')).toBeInTheDocument();
  expect(container.querySelector('label[for="email"]')).toBeInTheDocument();
  expect(container.querySelector('label[for="password"]')).toBeInTheDocument();
  expect(container.querySelector('button[type="submit"]')).toBeInTheDocument();
});
