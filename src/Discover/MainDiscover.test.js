import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainDiscover from './MainDiscover';
//import { BabelFile } from '@babel/core';
//import { describe } from 'node:test';

describe('Discover', () => {
    test('render h1 component', () => {
        render(
            <MemoryRouter>
              <MainDiscover />
            </MemoryRouter>
          );
        const h1Element = screen.getByText('Discover new music');
        expect(h1Element).toBeInTheDocument();
    })
})

describe('Discover', () => {
    test('render p component', () => {
        render(
            <MemoryRouter>
              <MainDiscover />
            </MemoryRouter>
          );
        const pElement = screen.getByText('By joing you can benefit by listening to the latest albums releases.');
        expect(pElement).toBeInTheDocument();
    })
})

/*describe('Discover', () => {
    test('Muestra el h1 correctamente', () => {
        render(
            <MemoryRouter>
              <Discover />
            </MemoryRouter>
          );
        const h1 = 'Discover new music';
        const { getByText } = render(Discover h1={h1}, screen);
        const h1Element = getByText(h1);
        expect(h1Element).toBeInTheDocument();
    })
})*/