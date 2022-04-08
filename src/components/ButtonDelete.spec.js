import { render, screen } from '@testing-library/react';
import ButtonDelete from './ButtonDelete';
import userEvent from '@testing-library/user-event';

describe('ButtonDelete', () => {
  it('renders a button', () => {
    render(<ButtonDelete />);

    const buttonDelete = screen.getByRole('button', {});

    expect(buttonDelete).toBeInTheDocument();
  });
  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(<ButtonDelete onClick={handleOnClick}></ButtonDelete>);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
