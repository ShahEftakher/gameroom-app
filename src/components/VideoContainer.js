import React from 'react';
import { Card } from 'semantic-ui-react';
import Videocard from './Videocard';

const VideoContainer = ({ videos }) => {
  console.log(videos);
  return (
    <div class="col-md-9 border border-dark p-3 mt-2 w-100">
      <Card.Group itemsPerRow={4}>
        {videos.map((video) => {
          console.log(video);
          return <Videocard data={video.data} id={video.id} key={video.id} />;
        })}
      </Card.Group>
    </div>
  );
};

export default VideoContainer;
