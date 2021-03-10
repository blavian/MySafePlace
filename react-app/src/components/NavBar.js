import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { Outer} from "../styled/navbar";



const NavBar = ({ authenticated, setAuthenticated }) => {
  return (
    <Outer>
    {!authenticated && (
      <>
      <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
      </>
    )}
    {authenticated && (
      <>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
          <LogoutButton setAuthenticated={setAuthenticated} />
      
      
      </>
    )}
    </Outer>
  );
}

export default NavBar;