import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const Videocard = ({ data, id }) => {
  const history = useHistory();
  return (
    <Card
      color="red"
      image="https://firebasestorage.googleapis.com/v0/b/esd-db-test.appspot.com/o/fb_image.png?alt=media&token=68824200-e057-40d6-9310-9ce91bb3bfc7"
      header={data.title}
      description={data.description}
      onClick={() => {
        history.push('/video/' + id);
      }}
    />
  );
};

export default Videocard;
