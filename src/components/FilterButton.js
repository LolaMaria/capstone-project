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
      <FilterButton onClick={() => setFilteredPlants(savedPlants)}>
        All Plants
      </FilterButton>
      <div>
        {plantCardsFiltered.map((category, index) => {
          return (
            <FilterButton onClick={() => filterPlant(category)} key={index}>
              {category}
            </FilterButton>
          );
        })}

        {/* <button
         
          onClick={() => filterPlant('water')}
        >
          Water almost never!
        </button>
        <button
    
          onClick={() => filterPlant('food')}
        >
          You can eat it
        </button>
        <button
        
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
  background-color: #fee6e3;
  border: 2px solid #5c9875;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 12px;
  height: 48px;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  text-transform: uppercase;
  //background: ${plant => (plant.category ? 'pink' : '#c2fbd7')};
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  color: blue;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :after {
    background-color: pink;
    border-radius: 8px;
    content: '';
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  :hover:after {
    transform: translate(0, 0);
  }

  :active {
    background-color: green;
    outline: 0;
  }
  :hover {
    outline: 0;
  }
`;
