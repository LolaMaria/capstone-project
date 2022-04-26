import styled from 'styled-components';
import React, { useState } from 'react';
import FilterButtons from '../components/FilterButton';
import PlantCard from '../components/PlantCard';
import perfectHeader from '../images/perfectHeader.png';

export default function FilterPage({
  savedPlants,
  onHandleBookmarkClick,
  onDeletePlant,
  onEdit,
}) {
  const [filter, setFilter] = useState('');

  const plantCardsFiltered = [
    ...new Set(savedPlants.flatMap(plant => plant.category)),
  ];

  const filterPlant = category => {
    setFilter(category);
  };

  const filteredPlants = filter
    ? savedPlants.filter(plant => {
        return plant.category.includes(filter);
      })
    : savedPlants;

  console.log('#filter plant', filterPlant);
  return (
    <>
      <Wrapper>
        <Header>
          <img
            src={perfectHeader}
            width="350
        rem"
            alt=""
          />
        </Header>

        <FilterButtons
          filterPlant={filterPlant}
          savedPlants={savedPlants}
          plantCardsFiltered={plantCardsFiltered}
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
