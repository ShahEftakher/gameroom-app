import React from 'react';
import { Card } from 'semantic-ui-react';
import { Avatar } from '@material-ui/core';


const Userprofile = ({ userInfo }) => {
  return (
    <Card className="border-0 shadow mb-2 me-2 bg-body rounded mt-2 p-3">
      <Card.Content className="d-flex justify-content-center">
        <Avatar
          src={userInfo.profileImage}
          alt=""
          style={{ height: '20vh', width: '20vh' }}
        ></Avatar>
      </Card.Content>
      <Card.Content className="p-2 border-0">
        <Card.Header>{userInfo.name}</Card.Header>
        <Card.Meta>
          <span className="mt-3">{userInfo.role}</span>
        </Card.Meta>
        <Card.Description>Email: {userInfo.email}</Card.Description>
      </Card.Content>
      <Card.Content className="p-2 border-0">
        <Card.Description>Bio: {userInfo.bio}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Userprofile;
