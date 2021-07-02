import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../components/App';

describe('App Componenet', () => {
  it('it always renders the same markup', () => {
    const componentTree = renderer
      .create(<App />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
