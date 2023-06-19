import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainHome from './Components/MainHome';

describe('print H1', () => {
    test('print Feel The Music', () => {

        const titleDocument = screen.getByAltText('Feel The Music');
      
        expect(titleDocument).toBeInTheDocument();
    });
});
