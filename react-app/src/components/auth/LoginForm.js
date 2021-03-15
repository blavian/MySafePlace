import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login,demoLogin} from "../../redux-store/session"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  
`;

const LoginForm = ({ authenticated,setAuthenticated}) => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const onDemoLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(demoLogin());
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/notebooks" />;
  }

  return (
    <Container>
      <Form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>

        <h1>Log in to My Safe Place</h1>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
        <button type="submit" onClick={onDemoLogin}>
          Demo User
        </button>
      </Form>
    </Container>
  );
};

export default LoginForm;
