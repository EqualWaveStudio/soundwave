import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import FormValidation from './FormValidation';
import { MemoryRouter } from 'react-router-dom';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render the form', () => {
  act(() => {
    render(<MemoryRouter><FormValidation /></MemoryRouter>, container);
  });

  expect(container.querySelector('label[for="name"]')).toBeInTheDocument();
  expect(container.querySelector('label[for="email"]')).toBeInTheDocument();
  expect(container.querySelector('label[for="password"]')).toBeInTheDocument();
  expect(container.querySelector('button[type="submit"]')).toBeInTheDocument();
});
