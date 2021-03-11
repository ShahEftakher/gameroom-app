import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Form } from 'semantic-ui-react';
import { Button, Header, Message } from 'semantic-ui-react';
import Navbar from '../../components/common/Navbar';
import { useUserContext } from '../../context/UserContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [error, setError] = useState();
  const [userError, setUserError] = useState('');
  const { login, setIsLoggedIn } = useUserContext();
  const loginSuccessToast = () => {
    toast.error('Login Successful!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) {
      setUserError('Enter email and password');
      return;
    }
    login(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        setIsLoggedIn(true);
        loginSuccessToast();
        history.push('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="d-flex justify-content-center mt-5 mt-5">
        <div className="shadow p-3 mb-5 bg-body rounded mt-5 w-25">
          <Header className="mt-3" size="large" textAlign="center">
            Login
          </Header>
          {error ? (
            <Message color="red">{JSON.stringify(error.message)}</Message>
          ) : (
            ''
          )}
          {userError ? (
            <Message color="red">{JSON.stringify(userError)}</Message>
          ) : (
            ''
          )}
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
