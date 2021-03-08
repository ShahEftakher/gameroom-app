import React from "react";
import { Card } from "semantic-ui-react";

const UserContainer = (props) => {
  return (
    <div class="col-md-2 border border-dark p-2 ms-1 mt-2">
      <Card.Group itemsPerRow={1}>{props.children}</Card.Group>
    </div>
  );
};

export default UserContainer;
