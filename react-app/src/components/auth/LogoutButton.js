import React from "react";
import { logout } from "../../redux-store/session"

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    setAuthenticated(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
