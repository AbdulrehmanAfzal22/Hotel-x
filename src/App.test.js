import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page without crashing', () => {
  render(<App />);
  expect(screen.getByText(/Hotel/i)).toBeInTheDocument();
  expect(screen.getByText(/One platform/i)).toBeInTheDocument();
});
