import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Button, Header, Message, Form } from 'semantic-ui-react';
import Navbar from '../../components/common/Navbar';
import { useUserContext } from '../../context/UserContext';

const ResetPassword = () => {
  const [error, setError] = useState('');
  const [color, setColor] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { updatePassword, logout } = useUserContext();
  const history = useHistory();

  const passwordUpdateToast = () => {
    return toast.success('Password successfully updated!/nLogin to continue!');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setError('Please enter your new passwords');
      setColor('red');
      return;
    }
    if (password !== confirmPassword) {
      setError('Password does not match!');
      setColor('red');
      return;
    }
    updatePassword(password).then(() => {
      e.target.reset();
      logout();
      passwordUpdateToast();
      history.push('/login');
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
                Enter new password
              </Message>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>New Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={handlePasswordChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  onChange={handleConfirmChange}
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

export default ResetPassword;
