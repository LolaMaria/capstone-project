import PlantCard from '../components/PlantCard';
import styled from 'styled-components';
//import Searchbar from '../components/Searchbar';

export default function HomePage({
  savedPlants,
  onHandleBookmarkClick,
  onDeletePlant,
  onEdit,
}) {
  return (
    <>
      <Wrapper>
        <Header>FIND YOUR PERFECT PLANT!</Header>
        <ListWrapper role="list" aria-labelledby="Header">
          {savedPlants.map(
            ({ name, fact, water, spot, info, img, _id, isBooked }) => {
              return (
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
                    onDeletePlant={onDeletePlant}
                    onEdit={onEdit}
                  />
                </li>
              );
            }
          )}
        </ListWrapper>
      </Wrapper>
    </>
  );
}

const Header = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: #5c9875;
`;
const ListWrapper = styled.ul`
  margin: 0rem 0rem 5rem -2.5rem;
  list-style: none;
`;
const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;
