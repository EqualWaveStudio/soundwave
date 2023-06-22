import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

interface FooterProps {
  isLoading?: boolean;
  isError?: boolean;
  loadData?: () => Promise<unknown>;
}

describe('Footer', () => {
  test('renders Logo component', () => {
    const props: FooterProps = {
      isLoading: false,
      isError: false,
      loadData: jest.fn(),
    };

    render(
      <MemoryRouter>
        <Footer {...props} />
      </MemoryRouter>
    );

    const logoElement = screen.getByAltText('LogoTwitter');
    const logoTitleElement = screen.getByText('Twitter');

    expect(logoElement).toBeInTheDocument();
    expect(logoTitleElement).toBeInTheDocument();
  });

  test('renders text', () => {
    const props: FooterProps = {
      isLoading: false,
      isError: false,
      loadData: jest.fn(),
    };

    render(
      <MemoryRouter>
        <Footer {...props} />
      </MemoryRouter>
    );

    const textElement = screen.getByText('About Us');

    expect(textElement).toBeInTheDocument();
  });
});
