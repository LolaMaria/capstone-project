import styled from 'styled-components';
import BookmarkButton from './BookmarkButton';
import ButtonDelete from './ButtonDelete';
import ButtonEdit from './ButtonEdit';
import { useState } from 'react';
import DeleteMessage from './ModalDelete';

export default function PlantCard({
  name,
  fact,
  water,
  spot,
  info,
  img,
  onBookmarkClick,
  isBooked,
  _id,
  onDeletePlant,
  onEdit,
}) {
  function handleBookmark() {
    onBookmarkClick(_id);
  }
  const [showMessage, setShowMessage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card isBooked={isBooked}>
      <BookmarkButton onClick={handleBookmark} isBooked={isBooked} />

      {isEditing ? (
        <FormBox onSubmit={handleSubmit}>
          <Label htmlFor="name">Edit NAME:</Label>
          <input id="name" defaultValue={name} />
          <Label htmlFor="fact">Edit FACTS:</Label>
          <input id="fact" defaultValue={fact} />
          <Label htmlFor="water">Edit WATER INTAKE:</Label>
          <input id="water" defaultValue={water} />
          <Label htmlFor="spot">Edit PLANT SPOT:</Label>
          <input id="spot" defaultValue={spot} />
          <Label htmlFor="info">Edit INFO:</Label>
          <input id="info" defaultValue={info} />
          <XYZ type="submit">Save changes</XYZ>
        </FormBox>
      ) : (
        <>
          {' '}
          <div>
            <PlantIcon>
              <svg
                width="40"
                height="40"
                fill="green"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2692 1.06583C14.6367 7.2275 17.1467 18.1042 17.1467 18.1042L19.0192 14.5583L23.2692 1.06583ZM23.2692 1.06583C26.8067 11.0642 18.5133 18.5342 18.5133 18.5342L19.0133 14.5558L23.2692 1.06583ZM8.18333 3.00417C12.645 3.29583 16.3633 7.83833 16.3633 7.83833C15.2496 10.4603 14.9443 13.3551 15.4867 16.1517C11.3533 12.5325 7.52 8.77917 8.1825 3.00417H8.18333ZM0.456667 16.9317C5.54893 20.2687 11.3712 22.3278 17.4292 22.9342C14.3975 15.9167 9.01 13.4008 0.456667 16.9317V16.9317ZM18.6242 22.8958C27.8117 22.43 35.5342 17.0525 35.5433 17C27.7267 13.6292 22.0492 15.5008 18.6242 22.8958Z"
                  stroke="#4ECB71"
                  strokeWidth="0.833333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </PlantIcon>
            <Name>{name}</Name>
            <PlantPic src={img} alt="" width="100px" />
          </div>
          <List role="list">
            <Info>Interesting and useful facts:</Info>
            <ListInfo>{fact}</ListInfo>
            <Info>Water intake:</Info>
            <ListInfo>{water}</ListInfo>
            <Info>Plant spot:</Info>
            <ListInfo>{spot}</ListInfo>
            <Info>Additional info:</Info>
            <ListInfo>{info}</ListInfo>
          </List>
        </>
      )}
      <ButtonEdit onClick={() => setIsEditing(!isEditing)} />
      <ButtonDelete onClick={() => setShowMessage(true)} />
      {showMessage && (
        <DeleteMessage
          onConfirmDelete={() => onDeletePlant(_id)}
          onCancelDelete={() => setShowMessage(false)}
        />
      )}
    </Card>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const { name, fact, water, spot, info } = event.target.elements;
    onEdit({
      _id: _id,
      name: name.value,
      fact: fact.value,
      water: water.value,
      spot: spot.value,
      info: info.value,
      img,
    });
    setIsEditing(false);
  }
}

const Card = styled.div`
  display: flex;
  justify-content: column;
  padding: 1rem;
  margin: 1rem 0rem 2rem 0rem;
  background-color: #d4e5ed;
  border-radius: 3%;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: relative;

  /*:hover {
    transform: scale(1.09);
    border-color: pink;
    border-style: bold;
  }*/
`;

const Name = styled.h1`
  font-size: 1rem;

  color: #5c9875;
`;

const List = styled.ul`
  margin: 1rem;
  list-style: none;
  color: #590202;
`;
const Info = styled.dl`
  font-weight: bold;
  font-size: 0.7rem;
  margin: 0.3rem 0rem;
  color: #5c9875;
`;
const ListInfo = styled.li`
  font-size: 0.7rem;
`;

const PlantIcon = styled.div`
  margin: 0.1rem;
`;

const PlantPic = styled.img`
  margin: 2rem 0rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  font-size: 0.7rem;

  color: #5c9875;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #d4e5ef;
  padding: 5px;
  border-radius: 3%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border: 2px solid blue;
`;

const XYZ = styled.button`
  text-transform: uppercase;
  height: 30px;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: blue;
  cursor: pointer;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 10px;
  user-select: none;
`;
