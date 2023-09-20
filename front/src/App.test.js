import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lavanderia react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lavanderia/i);
  expect(linkElement).toBeInTheDocument();
});
