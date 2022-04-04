import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookmarkPage from './pages/BookmarkPage';
import Navigation from './components/Navigation.js';
import data from './components/data.js';
import { useState } from 'react';
import styled from 'styled-components';
import InputPage from './pages/InputPage';
import { nanoid } from 'nanoid';
//import { useLocalStorage } from 'usehooks-ts';

export default function App() {
  const [savedPlants, setSavedPlants] = useState(data);

  const navigate = useNavigate();

  function handleBookmarkClick(_id) {
    setSavedPlants(
      savedPlants.map(card => {
        if (card._id === _id) {
          return { ...card, isBooked: !card.isBooked };
        } else return card;
      })
    );
  }
  return (
    <AppGrid>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              savedPlants={savedPlants}
              onHandleBookmarkClick={handleBookmarkClick}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <BookmarkPage
              savedPlants={savedPlants}
              onHandleBookmarkClick={handleBookmarkClick}
            />
          }
        />
        <Route
          path="/input"
          element={<InputPage onCreatePlant={handleSubmitCreate} />}
        />
      </Routes>
      <Navigation />
    </AppGrid>
  );

  function handleSubmitCreate(
    inputValue,
    inputValueFact,
    inputValueSpot,
    inputValueWater,
    inputValueInfo
  ) {
    const newPlant = {
      id: nanoid(),
      name: inputValue,
      fact: inputValueFact,
      spot: inputValueSpot,
      water: inputValueWater,
      info: inputValueInfo,
    };

    setSavedPlants([...savedPlants, newPlant]);

    navigate('/');
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 1fr 1fr;
  position: relative;
`;
