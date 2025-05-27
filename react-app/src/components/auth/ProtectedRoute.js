import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ProtectedRoute = props => {
  return (
    <Route {...props}>
      {(props.authenticated)? props.children  : <Routes to="/login" />}
    </Route>
  )
};


export default ProtectedRoute;
