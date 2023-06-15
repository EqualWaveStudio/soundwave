import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Components/Header';

describe('Header', () => {
  test('renders Logo component', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('Logo');
    const logoTitleElement = screen.getByText('SoundWave');
    expect(logoElement).toBeInTheDocument();
    expect(logoTitleElement).toBeInTheDocument();
  });

  test('renders Buttons component', () => {
    render(<Header />);
    const discoverButtonElement = screen.getByText('Discover');
    const joinButtonElement = screen.getByText('Join');
    expect(discoverButtonElement).toBeInTheDocument();
    expect(joinButtonElement).toBeInTheDocument();
  });
});
