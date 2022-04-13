import PlantCard from '../components/PlantCard';
import styled from 'styled-components';

export default function BookmarkPage({
  savedPlants,
  onHandleBookmarkClick,
  onDeletePlant,
  onEdit,
}) {
  return (
    <>
      {' '}
      <Wrapper>
        <Header>YOUR SAVED PLANTS</Header>
        <ListWrapper role="list" aria-labelledby="Header">
          {savedPlants.map(
            ({ name, fact, water, spot, info, img, _id, isBooked }) =>
              isBooked && (
                <li key={_id}>
                  <PlantCard
                    name={name}
                    fact={fact}
                    water={water}
                    spot={spot}
                    info={info}
                    img={img}
                    _id={_id}
                    onBookmarkClick={onHandleBookmarkClick}
                    isBooked={isBooked}
                    key={_id}
                    onDeletePlant={onDeletePlant}
                    onEdit={onEdit}
                  />
                </li>
              )
          )}
        </ListWrapper>
      </Wrapper>
    </>
  );
}

const Header = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  color: #5c9875;
`;
const ListWrapper = styled.ul`
  margin: 0rem 0rem 5rem -2.5rem;
  list-style: none;
  @media (min-width: 650px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 950px) {
    grid-template-columns: 1fr;
  }
`;
const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;
