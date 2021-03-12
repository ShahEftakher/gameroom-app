import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import { db, storage } from '../../../firebase';
import Videoplayer from './ModalVideoplayer';

const VideoEditCard = ({ data, id }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [confirmModal, setConfirmModal] = useState(false);
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
            setConfirmModal(false);
            setOpen(false);
            window.location.reload();
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
    <>
      <Card
        image={data.thumbnail}
        header={data.title}
        description={data.description}
        onClick={() => {
          setOpen(true);
        }}
      />
      <div className="d-flex justify-content-center">
        <div>
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            className="mb-5"
          >
            <Modal.Content>
              <Videoplayer url={data.videoUrl} />
            </Modal.Content>
            <Modal.Content scrolling>
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
              <Modal.Actions className="d-flex justify-content-end">
                <Button
                  content="Delete Video"
                  labelPosition="right"
                  color="red"
                  icon="trash"
                  onClick={() => {
                    setConfirmModal(true);
                  }}
                />
              </Modal.Actions>
            </Modal.Content>
          </Modal>
        </div>
      </div>
      <Modal
        closeIcon
        open={confirmModal}
        onClose={() => setConfirmModal(false)}
        onOpen={() => setConfirmModal(true)}
      >
        <Header icon="trash" content="Delete Video" />
        <Modal.Content>
          <p>
            Do you want to delete this video? It will be deleted permanently!
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setConfirmModal(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" onClick={handleDelete}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default VideoEditCard;
