import React from 'react';
import styled, { css } from 'styled-components';

const FilterButtons = ({
  filterPlant,
  plantCardsFiltered,
  savedPlants,
  setFilteredPlants,
}) => {
  return (
    <>
      {' '}
      <FilterButton
        variant="all"
        onClick={() => setFilteredPlants(savedPlants)}
      >
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
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  background-color: #097969;
  align-items: center;
  margin: 0.1rem;
  border: none;

  letter-spacing: 0.05em;
  border-radius: 20em;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  :hover {
    color: hotpink;
  }

  ${props =>
    props.variant === 'all' &&
    css`
      font-size: 16px;
      margin-left: 110px;
    `};
`;
