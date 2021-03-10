import React from 'react';
import { useHistory } from 'react-router';
import { Card, Button } from 'semantic-ui-react';
import Videocard from './Videocard';

const VideoContainer = ({ videos, title }) => {
  const history = useHistory();

  return ( 
    <div class="col-md-9 border p-3 mt-2 w-100 shadow p-3 mb-5 bg-body rounded">
      <h2 className="">{title}</h2>
      <Card.Group itemsPerRow={4}>
        {videos.map((video) => {
          return <Videocard data={video.data} id={video.id} key={video.id} />;
        })}
      </Card.Group>
      <div className="d-flex justify-content-end mt-3">
        <Button
          labelPosition="right"
          content="   All videos"
          icon="chevron circle right"
          onClick={() => {
            history.push('/gallery');
          }}
        />
      </div>
    </div>
  );
};

export default VideoContainer;
