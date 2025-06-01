import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Routes } from "react-router-dom";
import { login,demoLogin} from "../../redux-store/session"
import {Container,Form,Input} from "../../styled/registration_forms"
import Button from "../../styled/button"


  



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
    return <Routes to="/notebooks" />;
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
        <Input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        <label htmlFor="password">Password</label>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <Button type="submit">Login</Button>
        <Button type="submit" onClick={onDemoLogin}>
          Demo User
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
