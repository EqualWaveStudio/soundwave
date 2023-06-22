import React from 'react';
import { render, screen } from '@testing-library/react';
import MainHome from './MainHome';

describe('Main title', () => {
  test('print in screen Feel The Music', () => {
    render(<MainHome />);

    const mainHeading = screen.getByText(/Feel The Music/i );
    expect(mainHeading).toBeInTheDocument();
  });
});

