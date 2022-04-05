import { render, screen } from '@testing-library/react';
import ButtonDelete from './ButtonDelete';

describe('ButtonDelete', () => {
  it('renders a button', () => {
    render(<ButtonDelete />);

    const buttonDelete = screen.getByRole('button', {});

    expect(buttonDelete).toBeInTheDocument();
  });
});
