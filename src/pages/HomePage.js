import PlantCard from '../components/PlantCard';
import styled from 'styled-components';

export default function HomePage({ savedPlants, onHandleBookmarkClick }) {
  return (
    <>
      <Header>FIND YOUR PERFECT PLANT!</Header>
      {savedPlants.map(
        ({ name, fact, water, spot, info, img, _id, isBooked }) => (
          <PlantCard
            name={name}
            fact={fact}
            water={water}
            spot={spot}
            info={info}
            img={img}
            id={_id}
            onBookmarkClick={onHandleBookmarkClick}
            isBooked={isBooked}
          />
        )
      )}
    </>
  );
}

const Header = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: #5c9875;
`;
