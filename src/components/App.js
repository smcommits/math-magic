/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import * as StyledComponent from './componentStyles/styledComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      this.handleKeyPress(e.key);
    });
  }

  handleClick(buttonName) {
    this.setState(calculate(this.state, buttonName));
    console.log(this.state);
  }

  handleKeyPress(buttonName) {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <StyledComponent.FlexContainer style={{ maxWidth: '700px' }}>
        <Display total={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </StyledComponent.FlexContainer>
    );
  }
}

export default App;
