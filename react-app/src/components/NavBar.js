import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { Outer, StyledLink } from "../styled/navbar"



const NavBar = ( {authenticated,setAuthenticated }) => {
  return (
        <Outer>
          <StyledLink to="/" exact={true} activeClassName="active">
            Home
          </StyledLink>
          {!authenticated && <><StyledLink to="/login" exact={true} activeClassName="active">
            Login
          </StyledLink>
          <StyledLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </StyledLink>
          <StyledLink to="/users" exact={true} activeClassName="active">
            Users
          </StyledLink> </>}
          {authenticated && <>
          <StyledLink to="/notebooks" exact={true} activeClassName="active">
            Notebooks
          </StyledLink>
          <LogoutButton setAuthenticated={setAuthenticated}  /> </>} 
     </Outer>
  );
}

export default NavBar;