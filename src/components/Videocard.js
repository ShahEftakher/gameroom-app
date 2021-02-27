import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "semantic-ui-react";

const Videocard = (props) => {
  const history = useHistory();
  return (
    <Card
      color="red"
      image="https://via.placeholder.com/50"
      header="video1"
      description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      onClick={() => {
        history.push("/video/id");
      }}
      // style={{maxHeight:"25%", maxWidth:"25%"}}
    />
  );
};

export default Videocard;
