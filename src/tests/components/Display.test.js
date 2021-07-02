import React from 'react';
import { render, screen } from '@testing-library/react';

import Display from '../../components/Display';

describe('Display Component', () => {
  beforeEach(() => {
    render(<Display total="12" next="14" />);
  });

  it('renders a display on screen containing the value for total and next.', () => {
    const display = screen.getByRole('heading', { name: '1214' });
    expect(display).toBeInTheDocument();
  });
});
