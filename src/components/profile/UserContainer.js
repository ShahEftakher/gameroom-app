import React from 'react';
import { Card } from 'semantic-ui-react';
import Usercard from './Usercard';

const UserContainer = ({ users }) => {
  console.log(users);
  return (
    <div class="">
      <Card.Group
        className="d-flex justify-content-center mb-5"
        itemsPerRow={1}
      >
        {users.map((user) => {
          return <Usercard userData={user} key={user.user.uid} />;
        })}
      </Card.Group>
    </div>
  );
};

export default UserContainer;
