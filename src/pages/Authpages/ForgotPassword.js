import React, { useState } from 'react';
import { Button, Header, Message, Form } from 'semantic-ui-react';
import Navbar from '../../components/common/Navbar';
import { auth } from '../../firebase';

const ForgotPassword = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [color, setColor] = useState('red');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email!');
      return;
    }
    auth.sendPasswordResetEmail(email).then(() => {
      setError('Reset link Successfully sent!');
      setColor('green');
      e.target.reset();
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5">
        <div className="d-flex justify-content-center mt-5">
          <div className="shadow p-3 mb-5 bg-body rounded mt-5 w-25">
            <Header className="mt-3" size="large" textAlign="center">
              Update Password
            </Header>

            {error ? (
              <Message color={color}>{JSON.stringify(error)}</Message>
            ) : (
              <Message color="blue" className="text-center">
                Enter your email and we will send you a password reset link!
              </Message>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </Form.Field>
              <Button color="red" type="submit" className="w-100" on>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
