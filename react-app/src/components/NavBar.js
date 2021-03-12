import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { Outer} from "../styled/navbar";
import HamburgerMenu from "./HamburgerMenu"

const NavBar = ({ authenticated, setAuthenticated }) => {
  return (
    <Outer>
      <HamburgerMenu />
    </Outer>
  );
};


export default NavBar


