import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
  test('renders Logo component', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const logoElement = screen.getByAltText('LogoTwitter');
    const logoTitleElement = screen.getByText('Twitter');

    expect(logoElement).toBeInTheDocument();
    expect(logoTitleElement).toBeInTheDocument();
  });

  test('renders text', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const textElement = screen.getByText('About Us');

    expect(textElement).toBeInTheDocument();
  });
});
