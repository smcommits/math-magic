import React from 'react';
import { render, screen, fireEvent }  from '@testing-library/react'

import Button from '../../components/Button'


describe('Button Component', () => {

  const clickHandler = jest.fn()
  const buttonData = {
      name: '+', 
      handler: clickHandler,
      wide: true, 
      color: 'white',  
  }

  beforeEach(() => {
  render(<Button
      name={buttonData.name}
      clickHandler={buttonData.handler}
      wide={buttonData.wide}
      color={buttonData.color}
    />)
});


  

  it('renders a button on screen with given input', () => { 
    const button = screen.getByRole('button', {name: /\+/i})
    expect(button).toBeInTheDocument();
  })
  
  it('renders a button on screen with color passed as prop', () => { 
    const button = screen.getByRole('button', {name: /\+/i})
    const buttonColor = getComputedStyle(button).backgroundColor

    expect(buttonColor).toEqual('white');
  })

  it('renders a button on screen with wide passed as prop. If wide true, the button is double the standard size', () => {
    
    const button = screen.getByRole('button', {name: /\+/i})
    const buttonColor = getComputedStyle(button).width

    expect(buttonColor).toEqual('50%');
  })

  it('renders a button on screen with clickHandler which is called on click.', () => { 
    const button = screen.getByRole('button', {name: /\+/i})
    fireEvent.click(button)
    expect(clickHandler).toHaveBeenCalledTimes(1);
  })


})

