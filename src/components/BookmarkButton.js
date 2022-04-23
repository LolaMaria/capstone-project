import styled from 'styled-components';

export default function BookmarkButton({ onClick, isBooked }) {
  return (
    <Button type="button" onClick={onClick} isBooked={isBooked}>
      {isBooked ? 'Saved Plant' : 'Click to save this plant'}
    </Button>
  );
}

const Button = styled.button`
  text-transform: uppercase;
  height: 30px;
  position: absolute;
  right: 5px;
  top: -10px;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 11px;
  user-select: none;
  background: ${props => (props.isBooked ? 'pink' : '#c2fbd7')};
`;
