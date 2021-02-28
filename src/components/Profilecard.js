import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { useUserContext } from "../context/UserContext";
import EditIcon from "@material-ui/icons/Edit";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Profilecard = (props) => {
  const { currentUser } = useUserContext();
  const history = useHistory();
  return (
    <Card>
      <Card.Content className="d-flex justify-content-center">
        <Avatar
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          alt=""
          style={{ height: "100%", width: "100%" }}
        ></Avatar>
      </Card.Content>
      <Card.Content>
        <Card.Header>{currentUser.displayName}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Email: {currentUser.email}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          Bio: It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that it has a more-or-less normal distribution
          of letters, as opposed to using 'Content here, content here', making
          it look like readable English. Many desktop publishing packages and
          web page editors now use Lorem Ipsum as their default model text, and
          a search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Card.Description>
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
