import { render, screen } from '@testing-library/react';
import ButtonEdit from './ButtonEdit';

describe('ButtonEdit', () => {
  it('renders a button', () => {
    render(<ButtonEdit />);

    const buttonEdit = screen.getByRole('button', {});

    expect(buttonEdit).toBeInTheDocument();
  });
});
