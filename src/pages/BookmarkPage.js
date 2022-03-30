import PlantCard from '../components/Card';
import styled from 'styled-components';

export default function BookmarkPage({ savedPlants, onHandleBookmarkClick }) {
  return (
    <>
      <Header>Your saved Plants</Header>
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

const Header = styled.header`
  color: green;
`;
