import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;



const NavColumn = ({ authenticated, setAuthenticated, open }) => {
  return (
    <>
      <Ul open={open}>  <li> <NavLink to="/" exact={true} activeClassName="active">
        Home
      </NavLink> </li>
      {!authenticated && (
        <>
          <li><NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink> </li>
          <li><NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink> </li>
          <li> <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink> </li>
        </>
      )}
      {authenticated &&  <LogoutButton setAuthenticated={setAuthenticated} />}
      </Ul>
      </>
  );
};
  export default NavColumn

