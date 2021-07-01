import React from 'react';
import { render, screen, fireEvent }  from '@testing-library/react'

import ButtonPanel from '../../components/ButtonPanel';



describe('buttonPanel component', () => {
  const clickHandler = jest.fn()
  beforeEach(() => {
    render(<ButtonPanel clickHandler={clickHandler}/>)
  })


  it('should render all the calculator buttons in the groups of there', () => {
    const calculatorButtons = [
      "0", "1", "2", 
      "3", "4", "5", 
      "6", "7", "8", 
      "9", "+", "x", 
      "/", "+/-", "%", 
      "AC"
  ]

    calculatorButtons.forEach((buttonName) => {
      const button = screen.getByRole('button', {name: buttonName})
      expect(button).toBeInTheDocument()
    })
  })
})

