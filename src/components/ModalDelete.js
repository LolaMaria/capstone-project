import styled from 'styled-components';
import DeleteMessageButton from './DeleteMessageButton';

export default function DeleteMessage({ onConfirmDelete, onCancelDelete }) {
  return (
    <MessageOverlay>
      <MessageContent>
        <p>Do you really want to delete this plant?</p>
        <MessageWindowWrapper>
          <DeleteMessageButton
            variant={'cancel'}
            type="button"
            onClick={onCancelDelete}
          >
            NO!
          </DeleteMessageButton>
          <DeleteMessageButton
            variant={'confirm'}
            type="button"
            onClick={onConfirmDelete}
          >
            YES!
          </DeleteMessageButton>
        </MessageWindowWrapper>
      </MessageContent>
    </MessageOverlay>
  );
}

const MessageOverlay = styled.div`
  position: fixed;
  background-color: rgba(49, 49, 49, 0.3);
  inset: 0;
  z-index: 1;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 40%;
  margin: 30vh auto;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  h2 {
    padding-top: 5px;
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
    white-space: no-wrap;
  }
`;

const MessageWindowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
