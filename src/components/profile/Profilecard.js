import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { useUserContext } from '../../context/UserContext';
import EditIcon from '@material-ui/icons/Edit';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Profilecard = ({ userInfo }) => {
  const { currentUser } = useUserContext();
  const history = useHistory();
  return (
    <Card className="border-0 shadow mb-2 me-2 bg-body rounded mt-3 p-3">
      <Card.Content className="d-flex justify-content-center">
        <Avatar
          src={currentUser.photoURL}
          alt=""
          style={{ height: '20vh', width: '20vh' }}
        ></Avatar>
      </Card.Content>
      <Card.Content className="p-2 border-0">
        <Card.Header>{currentUser.displayName}</Card.Header>
        <Card.Meta>
          <span className="mt-3">{userInfo.role}</span>
        </Card.Meta>
        <Card.Description>Email: {currentUser.email}</Card.Description>
      </Card.Content>
      <Card.Content className="p-2 border-0">
        <Card.Description>Bio: {userInfo.bio}</Card.Description>
      </Card.Content>
      <Card.Content className="d-flex justify-content-end border-0">
        <Button
          onClick={() => {
            history.push('/editprofile');
          }}
        >
          <EditIcon />
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Profilecard;
