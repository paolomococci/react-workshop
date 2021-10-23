import { render, screen } from '@testing-library/react';
import App from './App';

test('how use reducer work', () => {
  render(<App />);
  const linkElement = screen.getByText(/how use reducer work/i);
  expect(linkElement).toBeInTheDocument();
});
