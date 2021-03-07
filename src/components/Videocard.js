import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const Videocard = ({ data, id }) => {
  return (
    <Link to={'/video/' + id} className="mx-2 my-2">
      <Card
        color="red"
        image={data.videoUrl}
        header={data.title}
        description={data.description}
        onClick={() => {}}
      />
    </Link>
  );
};

export default Videocard;
