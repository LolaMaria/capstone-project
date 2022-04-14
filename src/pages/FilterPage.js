import styled from 'styled-components';
import React from 'react';
import FilterButtons from '../components/FilterButton';
import PlantCard from '../components/PlantCard';

export default function FilterPage({
  savedPlants,
  onHandleBookmarkClick,
  onDeletePlant,
  onEdit,
  setFilteredPlants,
  filteredPlants,
}) {
  const plantCards = [...new Set(savedPlants.map(Val => Val.category))];
  console.log(plantCards);

  const filterPlant = curcat => {
    const perfectPlant = savedPlants.filter(perfectVal => {
      return perfectVal.category === curcat;
    });
    setFilteredPlants(perfectPlant);
  };
  return (
    <>
      <Wrapper>
        <Header>FIND YOUR PERFECT PLANT!</Header>
        <FilterButtons
          filterPlant={filterPlant}
          setFilteredPlants={setFilteredPlants}
          savedPlants={savedPlants}
          plantCards={plantCards}
        />
        <ListWrapper role="list" aria-labelledby="Header">
          {filteredPlants.map(
            ({ name, fact, water, spot, info, img, _id, isBooked, image }) => {
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
                    image={image}
                    savedPlants={filteredPlants}
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
  font-size: 1.5rem;
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
