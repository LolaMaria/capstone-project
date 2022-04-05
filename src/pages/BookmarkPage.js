import PlantCard from '../components/PlantCard';
import styled from 'styled-components';

export default function BookmarkPage({
  savedPlants,
  onHandleBookmarkClick,
  onDeleteCard,
}) {
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
              key={_id}
              onDeleteCard={onDeleteCard}
            />
          )
      )}
    </>
  );
}

const Header = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  color: #5c9875;
`;
