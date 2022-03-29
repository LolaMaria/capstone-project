import PlantCard from './components/Card';
import plantList from './components/data.js';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Header>Find your perfect plant!</Header>
      {plantList.map(({ name, fact, water, spot, info }) => (
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

const Header = styled.header`
  display: flex;
  justify-content: center;
`;
