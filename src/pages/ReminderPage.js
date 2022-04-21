import styled from 'styled-components';
import { useState } from 'react';
import DeleteReminder from '../components/DeleteReminderButton';

export default function ReminderPage({
  onRemindPlant,
  reminder,
  onDeleteReminder,
}) {
  const [plantRemind, setPlantRemind] = useState('');
  const [plantDate, setPlantDate] = useState('');
  return (
    <>
      <CreateReminder id="title-form">PLANT REMINDER</CreateReminder>
      <FormBox>
        <form
          autoComplete="off"
          aria-labelledby="title-form"
          onSubmit={handleSubmitRemind}
        >
          <CardBox>
            <Label htmlFor="reminder">YOUR REMINDER:</Label>
            <Input
              id=""
              name="plant"
              required
              maxLength="25"
              type="text"
              placeholder="Water my plant.."
              value={plantRemind}
              onChange={event => setPlantRemind(event.target.value)}
            />
            <Label htmlFor="date">WHEN TO REMIND YOU?</Label>
            <Input
              type="date"
              id="date"
              name="date"
              required
              value={plantDate}
              onChange={event => setPlantDate(event.target.value)}
            />
          </CardBox>
          <ButtonReminder>Remind me!</ButtonReminder>
        </form>
      </FormBox>
      {reminder.length === 0 ? (
        <></>
      ) : (
        <>
          {' '}
          <ListContainer>
            {reminder.map(el => (
              <>
                <ReminderList key={el._id}>{el.plant}</ReminderList>
                <DateList key={el._id}>{el.date}</DateList>
                <DeleteReminder id={el._id} onClick={onDeleteReminder} />
              </>
            ))}
          </ListContainer>
        </>
      )}
    </>
  );

  function handleSubmitRemind(event) {
    event.preventDefault();
    const form = event.target;
    const inputValuePlant = form.elements.plant.value.trim();
    const inputValueDate = form.elements.date.value;

    onRemindPlant(inputValuePlant, inputValueDate);
    form.reset();
    setPlantRemind('');
  }
}
const CreateReminder = styled.h2`
  font-size: 1.5rem;
  color: #5c9875;
  display: flex;
  justify-content: center;
`;

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0.1rem 3rem 0.1rem;
  padding: 1rem;
  background-color: #d4e5ed;
  border-radius: 3%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  height: auto;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 300px;
  margin: 5px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  font-size: 0.7rem;
  margin: 0.3rem 0rem;
  color: #5c9875;
`;

const ButtonReminder = styled.button`
  text-transform: uppercase;
  height: 30px;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  border: solid blue 2px;
  font-size: 0.7rem;
  user-select: none;
  width: 170px;
  margin: 40px 73px;
  background-color: #c2fbd7;
`;

const ListContainer = styled.ul`
  background-color: #c2fbd7;
  border-radius: 50%;
  margin: 0rem 1.5rem;
  list-style: none;
  border-radius: 5px;
  border: solid blue 2px;
`;

const ReminderList = styled.li`
  list-style: none;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  color: green;
  margin-top: 10px;
  font-style: bold;
`;

const DateList = styled.li`
  color: blue;
  list-style: none;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  text-transform: uppercase;
  font-size: 12px;
`;
