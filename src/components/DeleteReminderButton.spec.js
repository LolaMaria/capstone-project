import { render, screen } from '@testing-library/react';
import DeleteReminder from './DeleteReminderButton';
import userEvent from '@testing-library/user-event';

describe('DeleteReminder', () => {
  it('renders a button', () => {
    render(<DeleteReminder />);

    const deleteReminder = screen.getByRole('button', {});

    expect(deleteReminder).toBeInTheDocument();
  });
  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(<DeleteReminder onClick={handleOnClick}></DeleteReminder>);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
