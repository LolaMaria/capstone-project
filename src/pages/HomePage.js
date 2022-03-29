import PlantCard from '../components/Card';

export default function HomePage({ data }) {
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
