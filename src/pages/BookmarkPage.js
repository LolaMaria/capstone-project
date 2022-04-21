import PlantCard from '../components/PlantCard';
import styled from 'styled-components';
import DeleteReminder from '../components/DeleteReminder';

export default function BookmarkPage({
  savedPlants,
  onHandleBookmarkClick,
  onDeletePlant,
  onEdit,
  reminder,
  handleDeleteReminder,
  onDeleteReminder,
}) {
  const todaysReminder = reminder.filter(el => {
    // el.date = "2002-04-21"
    const inputDate = new Date(el.date);
    // Date Object:  Thur 2022
    // Get today's date
    const todaysDate = new Date();

    // call setHours to take the time out of the comparison
    return inputDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0);
  });

  return (
    <>
      {' '}
      <Wrapper>
        <Header>YOUR SAVED PLANTS</Header>
        {todaysReminder.length === 0 ? (
          <></>
        ) : (
          <ListContainer>
            {todaysReminder.map(item => (
              <>
                <Today>Reminders for Today:</Today>
                <ReminderList key={item._id}>
                  {item.plant}
                  <DeleteReminder id={item._id} onClick={onDeleteReminder} />
                </ReminderList>
              </>
            ))}
          </ListContainer>
        )}
        <ListWrapper role="list" aria-labelledby="Header">
          {savedPlants.map(
            ({ name, fact, water, spot, info, img, _id, isBooked }) =>
              isBooked && (
                <li key={_id}>
                  <PlantCard
                    name={name}
                    fact={fact}
                    water={water}
                    spot={spot}
                    info={info}
                    img={img}
                    _id={_id}
                    onBookmarkClick={onHandleBookmarkClick}
                    isBooked={isBooked}
                    key={_id}
                    onDeletePlant={onDeletePlant}
                    onEdit={onEdit}
                    onDeleteReminder={handleDeleteReminder}
                  />
                </li>
              )
          )}
        </ListWrapper>
      </Wrapper>
    </>
  );
}

const Header = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  color: #5c9875;
`;
const ListWrapper = styled.ul`
  margin: 0rem 0rem 5rem -2.5rem;
  list-style: none;
`;
const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const ListContainer = styled.ul`
  background-color: #c2fbd7;
  border-radius: 50%;
  margin: 1.5rem;
  list-style: none;
  border-radius: 5px;
  border: dotted hotpink 2px;
  padding: 1rem;
`;

const ReminderList = styled.li`
  list-style: none;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  color: green;
`;

const Today = styled.li`
  list-style: none;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  color: blue;
  margin: -10px 0px 5px 0px;
`;
