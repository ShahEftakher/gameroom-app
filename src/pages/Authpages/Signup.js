import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Select, Header, Message } from 'semantic-ui-react';
import Navbar from '../../components/common/Navbar';
import { useUserContext } from '../../context/UserContext';
import { auth, db } from '../../firebase';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const [role, setRole] = useState({});
  const history = useHistory();
  const [error, setError] = useState('');
  const { signup } = useUserContext();
  const [userError, setUserError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setUserError('Passwords do not match!');
      return;
    }
    if (role !== 'Content Creator' && role !== 'Viewer') {
      setUserError('Please select a role');
      return;
    }
    if (passwordRef.current.value.length < 6) {
      setUserError('Password must be 6 character long');
      return;
    }
    if (
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !confirmPasswordRef.current.value ||
      !nameRef.current.value
    ) {
      setUserError('Fields cannot be empty');
    } else {
      signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value,
        role
      )
        .then((userCreds) => {
          console.log(userCreds);
          userCreds.user.updateProfile({
            displayName: nameRef.current.value,
          });
          db.collection('users')
            .doc(userCreds.user.uid)
            .set({
              uid: userCreds.user.uid,
              name: nameRef.current.value,
              email: emailRef.current.value,
              role: role,
              bio: '',
            })
            .then(() => {
              if (role !== 'Content Creator') {
                history.push('/');
                return;
              }
              auth.currentUser
                .sendEmailVerification()
                .then(() => {
                  history.push('/');
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    }
  };

  const handleSelect = (event, data) => {
    setRole(data.value);
  };

  const userRole = [
    { key: 'Viewer', value: 'Viewer', text: 'Viewer' },
    {
      key: 'Content Creator',
      value: 'Content Creator',
      text: 'Content Creator',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center mt-4">
        <div className="shadow p-3 mb-5 bg-body rounded w-25">
          <Header className="" size="large" textAlign="center">
            Sign up
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
              <label>Name</label>
              <input type="text" placeholder="Name" ref={nameRef} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password(Minimum 6 character long)"
                ref={passwordRef}
              />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
              />
            </Form.Field>
            <Form.Field>
              <label>Choose Role</label>
              <Select
                placeholder="Select Role"
                options={userRole}
                onChange={handleSelect}
              />
            </Form.Field>

            <Button color="red" type="submit" className="w-100">
              Signup
            </Button>
            <Button
              className="w-100 mt-3"
              basic
              color="red"
              onClick={() => {
                history.push('/login');
              }}
            >
              Already have an account?
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
