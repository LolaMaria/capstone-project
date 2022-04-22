import { render, screen } from '@testing-library/react';
import FilterButton from './FilterButton';

describe('FilterButton', () => {
  it('renders a button', () => {
    render(<FilterButton />);

    const filterButton = screen.getByRole('button', {});

    expect(filterButton).toBeInTheDocument();
  });
});
