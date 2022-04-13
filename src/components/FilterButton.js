import React from 'react';
import data from './data.js';

const FilterButtons = ({ filterPlant, setPlant, plantCards }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {plantCards.map((Val, _id) => {
          return (
            <button onClick={() => filterPlant(Val)} key={_id}>
              {Val}
            </button>
          );
        })}
        <button onClick={() => setPlant(data)}>All</button>

        <button
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
        </button>
      </div>
    </>
  );
};
export default FilterButtons;
