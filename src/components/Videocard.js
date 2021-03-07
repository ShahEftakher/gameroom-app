import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const Videocard = ({ data, id }) => {
  const history = useHistory();
  return (
    <Card
      color="red"
      image={data.videoUrl}
      header={data.title}
      description={data.description}
      onClick={() => {
        history.push('/video/' + id);
      }}
    />
  );
};

export default Videocard;
