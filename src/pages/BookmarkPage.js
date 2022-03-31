import PlantCard from '../components/Card';
import styled from 'styled-components';

export default function BookmarkPage({ savedPlants, onHandleBookmarkClick }) {
  return (
    <>
      <Header>YOUR SAVED PLANTS</Header>
      {savedPlants.map(
        ({ name, fact, water, spot, info, img, _id, isBooked }) =>
          isBooked && (
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
  display: flex;
  justify-content: center;
`;
