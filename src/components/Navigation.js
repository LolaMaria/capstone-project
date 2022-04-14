import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Plants</LinkStyled>
      <LinkStyled to="/filter">Your Perfect plant</LinkStyled>
      <LinkStyled to="/bookmark">Saved Plants</LinkStyled>
      <LinkStyled to="/input">Create Plant</LinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  font-size: 0.9rem;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100vw;
  background: #5c9875;
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
    background: #5c9875;
    color: pink;
  }
`;
