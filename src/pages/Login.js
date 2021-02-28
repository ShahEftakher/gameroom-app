import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "semantic-ui-react";
import { Button, Header, Message } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [error, setError] = useState();
  const {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
  } = useUserContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userCreds) => {
        setIsLoggedIn(true);
        // setCurrentUser(userCreds.user)
        history.push("/")
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{ minWidth: "25%", minHeight: "35%", maxWidth:"25%" }}
      >
        <div className="shadow p-3 mb-5 bg-body rounded ">
          <Header className="" size="large" textAlign="center">
            Login
          </Header>
          {error ? <Message color="red">{JSON.stringify(error)}</Message> : ""}
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder="Email" ref={emailRef} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="password" ref={passwordRef} />
            </Form.Field>
            <Button color="red" type="submit" className="w-100" on>
              Login
            </Button>
            <Button
              className="w-100 mt-3"
              basic
              color="red"
              onClick={() => {
                history.push("/signup");
              }}
            >
              Don't have an account?
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
