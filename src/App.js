import PlantCard from './components/Card';
import data from './components/data.js';
function App() {
  return (
    <>
      <header>Find your perfect plant!</header>
      {data.map(({ name, fact, water, spot, info }) => (
        <PlantCard
          name={name}
          fact={fact}
          water={water}
          spot={spot}
          info={info}
        />
      ))}
    </>
  );
}

export default App;
