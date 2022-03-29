import { render, screen } from '@testing-library/react';
import PlantCard from './Card';

describe('PlantCard', () => {
  it('renders a list of cards with information about plants', () => {
    render(<PlantCard />);

    const PlantCards = screen.getByRole('list');
    expect(PlantCards).toBeInTheDocument();
  });
});
