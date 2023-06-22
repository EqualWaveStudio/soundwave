import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonJoin from './ButtonJoin';

describe('Button', () => {
  test('print in screen', () => {
    render(<ButtonJoin />); 
    
    expect(screen.getByText(/Join Now/i)).toBeInTheDocument();
  });
});