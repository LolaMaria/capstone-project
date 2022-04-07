import styled, { css } from 'styled-components';

export default styled.button`
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  cursor: pointer;
  color: white;
  padding: 8px 20px;
  border-radius: 100%;
  transition-duration: 0.3s;
  color: #fff;
  font-size: 0.9rem;
  width: 30%;
  border: none;
  align-self: center;
  display: flex;
  justify-content: center;
  ${props =>
    props.variant === 'cancel' &&
    css`
      background-color: green;
      &:hover {
        background-color: #3d9816;
      }
    `}
  ${props =>
    props.variant === 'confirm' &&
    css`
      background-color: #b71540;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      &:hover {
        background-color: red;
      }
    `}
`;
