import { render, screen } from '@testing-library/react';
import BookmarkButton from './BookmarkButton';
import userEvent from '@testing-library/user-event';

describe('BookmarkButton', () => {
  it('renders a button', () => {
    render(<BookmarkButton />);

    const bookmarkButton = screen.getByRole('button', {
      name: /save this plant/i,
    });

    expect(bookmarkButton).toBeInTheDocument();
  });
  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(<BookmarkButton onClick={handleOnClick}></BookmarkButton>);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
