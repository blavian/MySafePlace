import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import{signUp} from "../../redux-store/session"
import{Container,Form,Input} from "../../styled/registration_forms"
import Button from "../../styled/button"
const SignUpForm = ({authenticated, setAuthenticated}) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(signUp(username, email, password));
      if (!user.errors) {
        setAuthenticated(true);
      }else{
        setErrors(user.errors);
      }
    }
  };
  


  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/notebooks" />;
  }

  return (
    <Container>
      <Form onSubmit={onSignUp}>
        <h1>Sign up to My Safe Place</h1>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <label>User Name</label>
        <Input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></Input>
        <label>Email</label>
        <Input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></Input>
        <label>Password</label>
        <Input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></Input>
        <label>Confirm Password</label>
        <Input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></Input>

        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUpForm;
