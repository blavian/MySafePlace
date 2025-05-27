import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import Affirmation from "./components/affirmation"
import WordCloud from "./components/WordCloud"
import { ModalProvider } from "styled-react-modal";
import GlobalStyle from "./globalStyles";
function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
      <ModalProvider>
        <GlobalStyle />
        <NavBar
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={
            <LoginForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          } />
          <Route path="/sign-up" element={
            <SignUpForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          } />
          <Route path="/users" element={
            authenticated ? <UsersList /> : <Navigate to="/login" replace />
          } />
          <Route path="/users/:userId" element={
            authenticated ? <User /> : <Navigate to="/login" replace />
          } />
          <Route path="/notebooks" element={
            authenticated ? <Notebook /> : <Navigate to="/login" replace />
          } />
          <Route path="/notebooks/:notebookId/" element={
            authenticated ? <Affirmation /> : <Navigate to="/login" replace />
          } />
          <Route path="/profile" element={
            authenticated ? <WordCloud /> : <Navigate to="/login" replace />
          } />
        </Routes>
        <Footer />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
