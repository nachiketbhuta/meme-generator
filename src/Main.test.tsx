import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Hi/i);
  expect(linkElement).toBeInTheDocument();
});
