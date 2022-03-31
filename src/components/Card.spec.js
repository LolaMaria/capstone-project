import { render, screen } from '@testing-library/react';
import PlantCard from './Card';

describe('PlantCard', () => {
  it('renders a list of cards with information about plants', () => {
    render(<PlantCard />);

    const PlantCards = screen.getByRole('list');
    expect(PlantCards).toBeInTheDocument();
  });

  it('renders information about plants into cards', () => {
    render(
      <PlantCard
        name="Monstera"
        fact="easy"
        water="twice a week"
        spot="sun"
        info="luck"
      />
    );

    const name = screen.getByText(/Monstera/i);
    const fact = screen.getByText(/easy/i);
    const water = screen.getByText(/twice a week/i);
    const spot = screen.getByText(/sun/i);
    const info = screen.getByText(/luck/i);
    expect(name).toBeInTheDocument();
    expect(fact).toBeInTheDocument();
    expect(water).toBeInTheDocument();
    expect(spot).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });
});
