import React from 'react';
import { SideBarLink, Logo } from '../../atoms';
import lists from './lists';
import { Nav, NavBar } from './style';

function SideBar() {
  return (
    <NavBar>
      <Logo />
      <Nav>
        {lists.map(list => (
          <SideBarLink key={list.id} name={list.name} link={list.component} />
        ))}
      </Nav>
    </NavBar>
  );
}

SideBar.defaultProps = {};

export default SideBar;
