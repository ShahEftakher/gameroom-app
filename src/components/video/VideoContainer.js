import React from 'react';
import { useHistory } from 'react-router';
import { Card, Button } from 'semantic-ui-react';
import { useUserContext } from '../../context/UserContext';
import Videocard from './Videocard';

const VideoContainer = ({ videos, title, uid }) => {
  const history = useHistory();
  const { currentUser } = useUserContext();

  return (
    <div className="shadow p-3 mb-5 bg-body rounded ms-3">
      <h2 className="">{title}</h2>
      <hr></hr>
      {videos.length === 0 ? <p className="text-muted mb-5">No video uploaded yet</p> : ''}
      <Card.Group itemsPerRow={4}>
        {videos.map((video) => {
          return <Videocard data={video.data} id={video.id} key={video.id} />;
        })}
      </Card.Group>
      {currentUser === uid ? (
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
      ) : (
        ''
      )}
    </div>
  );
};

export default VideoContainer;
