import styled, { css } from 'styled-components';

export default function Button() {
  return <ButtonSubmit type="submit">Submit</ButtonSubmit>;
}

const ButtonSubmit = styled.button`
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
  border: 0;
  font-size: 10px;
  user-select: none;
  width: 170px;
  margin: 40px 73px;
  background: ${props => (props.isBooked ? 'pink' : '#c2fbd7')};

  ${props =>
    props.variant === 'reminder' &&
    css`
      background-color: green;
      color: #f4e9c9;
      border-radius: 30px;
    `};
`;
