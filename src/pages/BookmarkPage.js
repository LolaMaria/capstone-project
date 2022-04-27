import PlantCard from '../components/PlantCard';
import styled from 'styled-components';
import DeleteReminder from '../components/DeleteReminderButton';
import savedHeader from '../images/savedHeader.png';

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
    const inputDate = new Date(el.date);
    const todaysDate = new Date();

    return inputDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0);
  });

  return (
    <>
      <Wrapper>
        <Header>
          <img src={savedHeader} width="250rem" alt="" />
        </Header>
        {todaysReminder.length === 0 ? (
          <></>
        ) : (
          <>
            <Today>Reminders for Today:</Today>
            <ListContainer>
              {todaysReminder.map(remind => (
                <>
                  <ReminderList key={remind._id}>{remind.plant}</ReminderList>
                  <DeleteReminder id={remind._id} onClick={onDeleteReminder} />
                </>
              ))}
            </ListContainer>
          </>
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
  margin: 0.5rem 1.5rem 2.5rem 1.5rem;
  list-style: none;
  border-radius: 5px;
  border: dotted mintcream 2px;
  padding: 0.5rem;
  font-style: bold;
  box-shadow: 0 0 2px 2px blue;
`;

const ReminderList = styled.li`
  list-style: none;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  color: green;
  font-style: bold;
  margin-top: 10px;
`;

const Today = styled.li`
  list-style: none;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  color: blue;
  font-weight: bold;
  margin: 30px 1.5rem 0rem 1.5rem;
`;
