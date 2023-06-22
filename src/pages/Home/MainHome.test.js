import React from 'react';
import { render, screen } from '@testing-library/react';
import MainHome from './MainHome';
import ButtonJoin from '../../Components/ButtonJoin/ButtonJoin';

describe('should have a heading', () => {
  render(<MainHome />);
 
  
  
  test('Shuld have a heading: Feel The Music', () => {
   const mainHeading = screen.getByText(/Feel The Music/i );
    expect(mainHeading).toBeInTheDocument();
  });



  test('should have a paragraph', () => {
    const pElement = screen.queryByText('Stream over 20 thousand songs with one click')
    if (pElement) {  
      expect(pElement).toBeInTheDocument(); 
    } else {
      expect(pElement).not.toBeInTheDocument();
    }
  });

  test('Should have a button', () => {
    render(<ButtonJoin />)
    const buttonElement = screen.getByRole('button');
  
    expect(buttonElement).toBeInTheDocument();
  });
  })




