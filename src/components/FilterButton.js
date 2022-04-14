import React from 'react';
import styled from 'styled-components';

const FilterButtons = ({
  filterPlant,
  plantCardsFiltered,
  savedPlants,
  setFilteredPlants,
}) => {
  return (
    <>
      {' '}
      <AllButton onClick={() => setFilteredPlants(savedPlants)}>All</AllButton>
      <div>
        {plantCardsFiltered.map((category, _id) => {
          return (
            <FilterButton onClick={() => filterPlant(category)} key={_id}>
              {category}
            </FilterButton>
          );
        })}

        {/* <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterPlant('water')}
        >
          Water almost never!
        </button>
        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterPlant('food')}
        >
          You can eat it
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterPlant('toxic')}
        >
          Toxic :)
        </button> */}
      </div>
    </>
  );
};
export default FilterButtons;

const FilterButton = styled.button`
  align-items: center;
  margin: 1rem;
`;

const AllButton = styled.button`
  display: flex;
  justify-content: center;
  margin: 3rem;
`;
