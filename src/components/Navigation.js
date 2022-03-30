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
  font-weight: bold;
  :hover {
    color: pink;
  }
  &.active {
    background: #d4e5ed;
    color: pink;
  }
`;
const Nav = styled.nav`
  font-size: 1.2em;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  background: #d4e5ed;
  color: white;
  height: 48px;
  border-radius: 3%;
`;
