import { render, screen } from '@testing-library/react';
import ButtonEdit from './ButtonEdit';
import userEvent from '@testing-library/user-event';

describe('ButtonEdit', () => {
  it('renders a button', () => {
    render(<ButtonEdit />);

    const buttonEdit = screen.getByRole('button', {});

    expect(buttonEdit).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(<ButtonEdit onClick={handleOnClick}></ButtonEdit>);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
