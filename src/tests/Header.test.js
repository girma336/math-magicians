import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Test snapshot component of Header', () => {
  it('renders correctly of Header', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
