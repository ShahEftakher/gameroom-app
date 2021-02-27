import React from "react";
import { Card } from "semantic-ui-react";

const VideoContainer = (props) => {
  return (
    <div class="col-md-9 border border-dark p-3 mx-2 mt-2">
      <Card.Group itemsPerRow={4}>{props.children}</Card.Group>
    </div>
  );
};

export default VideoContainer;
