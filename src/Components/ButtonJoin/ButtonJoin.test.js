import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonJoin from './ButtonJoin';
import { MemoryRouter } from 'react-router-dom';

describe('Button', () => {
  test('print in screen', () => {
    render(<MemoryRouter><ButtonJoin /></MemoryRouter>); 
    
    expect(screen.getByText(/Join Now/i)).toBeInTheDocument();
  });
});