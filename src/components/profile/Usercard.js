import React from 'react';
import { Icon, Card, Image } from 'semantic-ui-react';

const Usercard = ({ user }) => {
  console.log(user.user);
  return (
    <Card className="w-75 h-75">
      <Image src={user.user.profileImage} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{user.user.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
};

export default Usercard;
