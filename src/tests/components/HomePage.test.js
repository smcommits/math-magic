import React from "react";
import renderer from "react-test-renderer";
import HomePage from "../../components/Home"



describe('Home Page Component', () => {
  it('it always renders the same markup', () => {
    const componentTree = renderer
      .create(<HomePage/>)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  })
})
