import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sample query to API text', () => {
  render(<App />);
  const linkElement = screen.getByText(/sample query to API/i);
  expect(linkElement).toBeInTheDocument();
});
