import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders four links', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const navLinks = screen.getAllByRole('link');
    expect(navLinks).toHaveLength(4);
  });
});
