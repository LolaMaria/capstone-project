import PlantCard from './components/Card';
import plantList from './components/data.js';
import { useState } from 'react';

function App() {
  const [plants, setPlants] = useState(plantList);
  return (
    <>
      <header>Find your perfect plant!</header>
      {plants.map(plantList => (
        <PlantCard
          key={plantList._id}
          name={plantList.name}
          fact={plantList.fact}
          water={plantList.water}
          spot={plantList.spot}
          info={plantList.info}
        />
      ))}
    </>
  );
}

export default App;
