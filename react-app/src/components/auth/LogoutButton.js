import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux-store/session"
import styled from "styled-components"

export const Button = styled.button`
  background-color: #3b49df;
  color: #ffff;
  height:5em;
  width:10em;
`;


const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    setAuthenticated(false);
  };

  return <Button onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
