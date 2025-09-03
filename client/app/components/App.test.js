import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders main app div', () => {
  render(<App />);
  const rootElement = screen.getByTestId('root'); // if you add data-testid="root"
  expect(rootElement).toBeInTheDocument();
});
