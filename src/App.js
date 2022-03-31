import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookmarkPage from './pages/BookmarkPage';
import Navigation from './components/Navigation.js';
import data from './components/data.js';
import { useState } from 'react';

export default function App() {
  const [savedPlants, setSavedPlants] = useState(data);

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
    <div>
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
      </Routes>
      <Navigation />
    </div>
  );
}
