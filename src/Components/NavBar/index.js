import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavBarElements';

function NavBar(props) {
  const { toggle } = props;
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default NavBar;
