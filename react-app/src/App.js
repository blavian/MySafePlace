import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Notebook from "./components/Notebook"
import { authenticate } from "./redux-store/session"
import {useDispatch} from "react-redux"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
import Modal from "react-modal";

function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await dispatch( authenticate());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
      <Route path="/" exact={true}>
          <LandingPage />
          </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/notebooks" exact={true} authenticated={authenticated}>
          <Notebook />
        </ProtectedRoute>
      </Switch>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
