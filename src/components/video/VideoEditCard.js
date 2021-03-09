import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, Header, Image, Modal } from 'semantic-ui-react';
import Videoplayer from './Videoplayer';

const VideoEditCard = ({ data, id }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <div>
      <Card
        color="red"
        image="https://firebasestorage.googleapis.com/v0/b/esd-db-test.appspot.com/o/fb_image.png?alt=media&token=68824200-e057-40d6-9310-9ce91bb3bfc7"
        header={data.title}
        description={data.description}
        onClick={() => {
          setOpen(true);
        }}
      />
      <div className="d-flex justify-content-center">
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <Modal.Content scrolling>
            <Videoplayer url={data.videoUrl} />
          </Modal.Content>
          <Modal.Actions scrolling>
            <Button color="black" onClick={() => setOpen(false)}>
              Nope
            </Button>
            <Button
              content="Yep, that's me"
              labelPosition="right"
              icon="checkmark"
              onClick={() => setOpen(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

export default VideoEditCard;
