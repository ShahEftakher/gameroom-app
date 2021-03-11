import React from 'react';
import { Card } from 'semantic-ui-react';
import VideoEditCard from './VideoEditCard';

const VideoContainerV2 = ({ videos, title }) => {
  return (
    <div class="col-md-9 border p-3 mt-2 w-100 shadow p-3 mb-5 bg-body rounded">
      <h2>{title}</h2>
      <hr></hr>
      <Card.Group itemsPerRow={4} className="p-2">
        {videos.map((video) => {
          return <VideoEditCard data={video.data} id={video.id} key={video.id} />;
        })}
      </Card.Group>
    </div>
  );
};

export default VideoContainerV2;
