import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Plants</LinkStyled>
      <LinkStyled to="/bookmark">Saved Plants</LinkStyled>
      <LinkStyled to="/input">Create Plant</LinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  margin-top: 5rem;
  font-size: 1rem;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  background: #d4e5ed;
  color: white;
  height: 48px;
  border-radius: 3%;
  bottom: 0px;
  position: fixed;
  justify-content: space-around;
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  display: grid;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  border-radius: 3%;
  font-weight: bold;

  bottom: 0px;
  :hover {
    color: pink;
  }
  &.active {
    background: #d4e5ed;
    color: pink;
  }
`;
