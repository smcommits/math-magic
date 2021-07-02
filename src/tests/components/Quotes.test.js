import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../../components/Quote';

describe('App Componenet', () => {
  it('it always renders the same markup', () => {
    const componentTree = renderer
      .create(<Quotes />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
