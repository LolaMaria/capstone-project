import { GrClose } from 'react-icons/gr';

export default function DeleteReminder({ onClick }) {
  return (
    <>
      <button type="button" onClick={onClick}>
        {' '}
        <GrClose />
      </button>
    </>
  );
}
