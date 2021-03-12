import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Avatar } from '@material-ui/core';
import { db } from '../../firebase';
import { useUserContext } from '../../context/UserContext';

const Userprofile = ({ userInfo }) => {
  // const followers=userInfo.followers;

  const { currentUser } = useUserContext();
  const handleClick = () => {
    // db.collection('users').doc(userInfo.uid).update({})
  };

  return (
    <Card className="border-0 shadow mb-2 me-2 bg-body rounded mt-2 p-3">
      <Card.Content className="d-flex justify-content-center">
        <Avatar
          src={userInfo.profileImage}
          alt=""
          style={{ height: '20vh', width: '20vh' }}
          className="mb-4"
        ></Avatar>
      </Card.Content>
      <Card.Content className="p-2 border-0 mb-2">
        <Card.Header className="mb-2 text-center">{userInfo.name}</Card.Header>
        <Card.Meta className="mb-4 text-center fs-5">
          <span className="mt-3 text-center ">{userInfo.role}</span>
        </Card.Meta>
        <Card.Description>
          <span className="fw-bolder">Email: </span> {userInfo.email}
        </Card.Description>
      </Card.Content>
      <Card.Content className="p-2 border-0">
        <Card.Description className="mb-4">
          <span className="fw-bolder">Bio:{'  '} </span> {userInfo.bio}
        </Card.Description>
      </Card.Content>
      <div className="d-flex justify-content-end mb-5">
        {userInfo.role === 'Content Creator' &&
        userInfo.uid !== currentUser.uid ? (
          <Button color="green" onClick={handleClick}>
            {' '}
            Follow{' '}
          </Button>
        ) : (
          ''
        )}
      </div>
    </Card>
  );
};

export default Userprofile;
