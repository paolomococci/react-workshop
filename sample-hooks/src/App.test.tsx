import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sample Hooks text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sample Hooks/i);
  expect(linkElement).toBeInTheDocument();
});
