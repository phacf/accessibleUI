import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {Button} from '../'

test('renders button to test tooltip', async () => {
  render(<Button label='click me' color='primary' size='medium' tooltip='tooltip test' />);
  const buttonElement = screen.getByText(/click me/i);

  fireEvent.mouseEnter(buttonElement)

  await waitFor(() => {
    const tooltipElement = screen.getByText(/tooltip test/i);
    expect(tooltipElement).toBeVisible();
  })

  fireEvent.mouseLeave(buttonElement)

  await waitFor(() => {
    const tooltipElement = screen.getByText(/tooltip test/i);

    setTimeout(()=>{

      expect(tooltipElement).not.toBeVisible();
    },500)
  })
});
