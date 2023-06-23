import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainJoin from './MainJoin';

describe('MainJoin', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter basename="/">
        <MainJoin />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
