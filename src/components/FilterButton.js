import React from 'react';
import styled, { css } from 'styled-components';

const FilterButtons = ({ filterPlant, plantCardsFiltered }) => {
  return (
    <>
      <FilterButton variant="all" onClick={() => filterPlant('')}>
        All Plants
      </FilterButton>
      <Container>
        {plantCardsFiltered?.map((category, index) => {
          return (
            <FilterButton onClick={() => filterPlant(category)} key={category}>
              {category}
            </FilterButton>
          );
        })}
      </Container>
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

  border: none;
  margin: 8px 3px;
  letter-spacing: 0.05em;
  border-radius: 20em;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  :hover {
    color: pink;
  }

  ${props =>
    props.variant === 'all' &&
    css`
      margin-left: 120px;
      margin-top: 20px;
      border: solid pink;
    `};
`;
const Container = styled.div`
  margin: 0 15px;
`;
