import { render, screen } from '@testing-library/react';
import BookmarkButton from './BookmarkButton';

describe('BookmarkButton', () => {
  it('renders a button', () => {
    render(<BookmarkButton />);

    const bookmarkButton = screen.getByRole('button', {
      name: /save this plant/i,
    });

    expect(bookmarkButton).toBeInTheDocument();
  });
});
