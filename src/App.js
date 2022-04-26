import { Routes, Route, useNavigate } from 'react-router-dom';

import BookmarkPage from './pages/BookmarkPage';
import Navigation from './components/Navigation.js';
import data from './components/data.js';
import styled from 'styled-components';
import InputPage from './pages/InputPage';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'usehooks-ts';
import ScrollToTop from './components/ScrollToTop';
import FilterPage from './pages/FilterPage';
import ReminderPage from './pages/ReminderPage';
//import placeholder from './src/images/placeholder.jpeg';

export default function App() {
  const [savedPlants, setSavedPlants] = useLocalStorage('plants', data);
  // const [filteredPlants, setFilteredPlants] = useLocalStorage('filter', []);
  const [plantReminder, setPlantReminder] = useLocalStorage('reminders', []);

  const navigate = useNavigate();

  function onEdit(updatedPlant) {
    const newPlants = savedPlants.map(savedPlants => {
      if (savedPlants._id === updatedPlant._id) {
        const newPlant = { ...savedPlants, ...updatedPlant };
        return newPlant;
      }
      return savedPlants;
    });
    setSavedPlants(newPlants);
  }

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
      <ScrollToTop />
      <Routes>
        {' '}
        <Route
          path="/"
          element={
            <FilterPage
              setSavedPlants={setSavedPlants}
              savedPlants={savedPlants}
              onHandleBookmarkClick={handleBookmarkClick}
              onDeletePlant={handleDeletePlant}
              onEdit={onEdit}
              // filteredPlants={filteredPlants}
              // setFilteredPlants={setFilteredPlants}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <BookmarkPage
              savedPlants={savedPlants}
              onHandleBookmarkClick={handleBookmarkClick}
              onDeletePlant={handleDeletePlant}
              onEdit={onEdit}
              reminder={plantReminder}
              onDeleteReminder={handleDeleteReminder}
            />
          }
        />
        <Route
          path="/input"
          element={<InputPage onCreatePlant={handleSubmitCreate} />}
        />
        <Route
          path="/reminder"
          element={
            <ReminderPage
              onRemindPlant={handleSubmitRemind}
              reminder={plantReminder}
              onDeleteReminder={handleDeleteReminder}
            />
          }
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
    inputValueInfo,
    img
  ) {
    const id = nanoid();
    const newPlant = {
      _id: id,
      name: inputValue,
      fact: inputValueFact,
      spot: inputValueSpot,
      water: inputValueWater,
      info: inputValueInfo,
      img,
      category: ['Created Plants'],
    };

    setSavedPlants([...savedPlants, newPlant]);

    //navigate('/');
  }

  function handleDeletePlant(id) {
    setSavedPlants(savedPlants.filter(card => card._id !== id));
  }

  function handleSubmitRemind(inputValuePlant, inputValueDate) {
    const reminder = {
      _id: nanoid(),
      plant: inputValuePlant,
      date: inputValueDate,
    };
    setPlantReminder([...plantReminder, reminder]);
  }
  function handleDeleteReminder(id) {
    setPlantReminder(plantReminder.filter(reminder => reminder._id !== id));
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 1fr 1fr 1fr;
  position: relative;
`;
