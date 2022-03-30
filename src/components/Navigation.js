import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Homepage</LinkStyled>
      <LinkStyled to="/bookmark">Saved Plants</LinkStyled>
    </Nav>
  );
}

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 100%;
  border-radius: 3%;

  &.active {
    background: green;
    color: white;
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: lightblue;
  color: white;
  height: 48px;
  border-radius: 3%;
`;
