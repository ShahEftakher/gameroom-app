import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { Button, Header, Message } from 'semantic-ui-react';
import Navbar from '../components/Navbar';
import { useUserContext } from '../context/UserContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [error, setError] = useState();
  const { login, setUserInfo, setIsLoggedIn } = useUserContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        setIsLoggedIn(true);
        history.push('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center mt-5 mt-5">
        <div className="shadow p-3 mb-5 bg-body rounded mt-5">
          <Header className="mt-3" size="large" textAlign="center">
            Login
          </Header>
          {error ? <Message color="red">{JSON.stringify(error)}</Message> : ''}
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder="Email" ref={emailRef} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="password" ref={passwordRef} />
            </Form.Field>
            <Link
              style={{ color: 'red', textDecoration: 'underline' }}
              to="/forgot-password"
            >
              <span className="d-flex justify-content-end mb-3">
                Forgot Password?
              </span>
            </Link>
            <Button color="red" type="submit" className="w-100" on>
              Login
            </Button>
            <Button
              className="w-100 mt-3"
              basic
              color="red"
              onClick={() => {
                history.push('/signup');
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
