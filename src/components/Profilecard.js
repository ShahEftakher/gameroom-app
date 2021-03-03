import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { useUserContext } from "../context/UserContext";
import EditIcon from "@material-ui/icons/Edit";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Profilecard = (props) => {
  const { currentUser, userInfo } = useUserContext();
  console.log(currentUser);
  const history = useHistory();
  return (
    <Card>
      <Card.Content className="d-flex justify-content-center">
        <Avatar
          src={currentUser.photoURL}
          alt=""
          style={{ height: "100%", width: "100%" }}
        ></Avatar>
      </Card.Content>
      <Card.Content className="p-2">
        <Card.Header>{currentUser.displayName}</Card.Header>
        <Card.Meta>
          <span className="mt-3">{userInfo.role}</span>
        </Card.Meta>
        <Card.Description>Email: {currentUser.email}</Card.Description>
      </Card.Content>
      <Card.Content className="p-2">
        <Card.Description>Bio: {userInfo.bio}</Card.Description>
      </Card.Content>
      <Card.Content className="d-flex justify-content-end">
        <Button
          onClick={() => {
            history.push("/editprofile");
          }}
        >
          <EditIcon />
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Profilecard;
