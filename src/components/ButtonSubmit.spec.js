import { render, screen } from '@testing-library/react';
import ButtonSubmit from './ButtonSubmit.js';

describe('BookmarkButton', () => {
  it('renders a button', () => {
    render(<ButtonSubmit />);

    const buttonSubmit = screen.getByRole('button', {
      name: /submit/i,
    });

    expect(buttonSubmit).toBeInTheDocument();
  });
});
