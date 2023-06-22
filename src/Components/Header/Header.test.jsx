import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('renders Logo component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logoElement = screen.getByAltText('Logo');
    const logoTitleElement = screen.getByText('SoundWave');
    expect(logoElement).toBeInTheDocument();
    expect(logoTitleElement).toBeInTheDocument();
  });

  test('renders Buttons component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const discoverButtonElement = screen.getByText('Discover');
    const joinButtonElement = screen.getByText('Join');
    expect(discoverButtonElement).toBeInTheDocument();
    expect(joinButtonElement).toBeInTheDocument();
  });
});