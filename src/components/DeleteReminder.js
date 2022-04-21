import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';
import { IconContext } from 'react-icons';

export default function DeleteReminder({ id, onClick }) {
  return (
    <>
      <Button
        type="button"
        aria-label="delete-reminder"
        onClick={() => onClick(id)}
      >
        <IconContext.Provider value={{ size: '15px', color: 'red' }}>
          <GrClose />
        </IconContext.Provider>
      </Button>
    </>
  );
}

const Button = styled.button`
  cursor: pointer;
  border-style: none;
  margin: 05px 0px 0px 0px;
  background-color: transparent;
  color: red;
`;
