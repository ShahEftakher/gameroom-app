import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { useUserContext } from '../context/UserContext';
import Loginmodal from './Loginmodal';

const Videocard = ({ data, id }) => {
  const history = useHistory();
  const { currentUser } = useUserContext();
  return (
    <Link to={{ pathname: '/video/' + id, video: data }}>
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
