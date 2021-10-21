import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Notes of Things To Do text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Notes of Things To Do/i);
  expect(linkElement).toBeInTheDocument();
});
