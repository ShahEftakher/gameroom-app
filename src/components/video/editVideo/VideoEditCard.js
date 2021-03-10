import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import { db, storage } from '../../../firebase';
import Videoplayer from './ModalVideoplayer';

const VideoEditCard = ({ data, id }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDelete = (e) => {
    const fileRef = storage.refFromURL(data.videoUrl);
    fileRef
      .delete()
      .then(() => {
        db.collection('videos')
          .doc(id)
          .delete()
          .then(() => {
            setOpen(false);
          })
          .catch(() => {});
      })
      .catch(() => {});
  };

  const handleEdit = (e) => {
    e.preventDefault();
    db.collection('videos')
      .doc(id)
      .update({
        title: title,
        description: description,
      })
      .then(() => {
        setOpen(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <Modal.Content>
            <Form onSubmit={handleEdit}>
              <Form.Field>
                <input
                  type="text"
                  onChange={handleTitleChange}
                  defaultValue={data.title}
                />
              </Form.Field>
              <Form.Field>
                <input
                  type="text"
                  onChange={handleDescriptionChange}
                  defaultValue={data.description}
                />
              </Form.Field>
              <Button color="black" positive>
                Update
              </Button>
            </Form>
          </Modal.Content>
          <Modal.Actions scrolling>
            <Button
              content="Delete Video"
              labelPosition="right"
              color="red"
              icon="trash"
              onClick={handleDelete}
            />
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

export default VideoEditCard;
