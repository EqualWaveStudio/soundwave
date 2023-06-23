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
    render(<MemoryRouter><MainHome />
    </MemoryRouter>); 
    const pElement = screen.getByText('Stream over 20 thousand songs with one click')
    expect(pElement).toBeInTheDocument(); 

  });

  test('Should have a button', () => {
    render(<ButtonJoin />)
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });


  it('If the photo of the girl fails, the alternate text appear', () => {   
    render(<MainHome />);    
    const imageElement = screen.getByAltText(/Afro-descendant woman with headphones listening to and enjoying music/i);
    expect(imageElement).toBeInTheDocument();
  });
 });
  




