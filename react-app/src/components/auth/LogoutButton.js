import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux-store/session"
import Button from "../../styled/button"



const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    setAuthenticated(false);
  };

  return <Button onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
