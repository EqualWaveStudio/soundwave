import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainDiscover from './MainDiscover';

describe('Render h1 component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MainDiscover />
      </MemoryRouter>
    );
  })
  
  test('Should have an h1', () => {
    const h1Element = screen.getByRole('heading', { level: 1 });

    expect(h1Element).toBeInTheDocument();
  })

  test('h1 should have a text', () => {
    const h1Element = screen.getByText('Discover new music');

    expect(h1Element).toBeInTheDocument();
  })

  test('If the text does not match', () => {
    const h1Element = screen.getByText('over new music', { exact: false });

    expect(h1Element).toBeInTheDocument();
  })
})

describe('Render p component', () => {
  test('P should have a text', () => {
    render(
      <MemoryRouter>
        <MainDiscover />
      </MemoryRouter>
    );
  
    const pElement = screen.getByText('By joing you can benefit by listening to the latest albums releases.');

    expect(pElement).toBeInTheDocument();
  })
})

describe('Alt text for the images', () => {  
  it('If the microphone image fails, the alternate text of the microphone icon image should appear', () => {   
    const { getByAltText } = render(<MainDiscover />);    
    const imagen = getByAltText(/microphone icon/i); 

    expect(imagen).toBeInTheDocument();  
  });

  it('If the albums image fails, the alternate text of the albums icon image should appear', () => {   
    const { getByAltText } = render(<MainDiscover />);    
    const imagen = getByAltText(/albums icon/i);    

    expect(imagen).toBeInTheDocument();  
  });

  it('If the more image fails, the alternate text of the more icon image should appear', () => {   
    const { getByAltText } = render(<MainDiscover />);    
    const imagen = getByAltText(/more icon/i);  

    expect(imagen).toBeInTheDocument();  
  });

  it('If the covers image fails, the alternate text of the collage of album covers image should appear', () => {   
    const { getByAltText } = render(<MainDiscover />);    
    const imagen = getByAltText(/collage of album covers/i);  

    expect(imagen).toBeInTheDocument();  
  });
});