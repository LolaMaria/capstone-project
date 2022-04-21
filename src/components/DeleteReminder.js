import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';

export default function DeleteReminder({ id, onClick }) {
  return (
    <>
      <Button type="button" onClick={() => onClick(id)}>
        {' '}
        <GrClose />
      </Button>
    </>
  );
}

const Button = styled.button`
  cursor: pointer;
  border-style: none;
`;
