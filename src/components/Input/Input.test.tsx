import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

test('renders button text', () => {
  render(<Input label='Input test'/>);
  const inputElement = screen.getByText(/Input test/i);
  expect(inputElement).toBeInTheDocument();
});
