import React, { useEffect, useRef, useState } from 'react';
import { Comment, Header, Form, Button } from 'semantic-ui-react';
import { useUserContext } from '../../context/UserContext';
import { db } from '../../firebase';
import VideoComment from './VideoComment';
import { toast, ToastContainer } from 'react-toastify';

const VideoComments = ({ videoId }) => {
  const { currentUser } = useUserContext();
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  console.log(currentUser);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const errorToast = () => {
    toast.info('Add a comment!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment) {
      errorToast();
      return;
    }
    let temp_new_comment = {
      uid: currentUser.uid,
      author: currentUser.displayName,
      body: newComment,
      imageUrl: currentUser.photoURL,
      createdAt: new Date().toISOString(),
      created_time: new Date().toLocaleTimeString(),
    };
    let temp_comments = [...comments];
    temp_comments.push(temp_new_comment);

    setComments(temp_comments);
    console.log(comments);
    db.collection('videos')
      .doc(videoId)
      .update({
        comments: temp_comments,
      })
      .then(() => {
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComments = () => {
    let data;
    db.collection('videos')
      .doc(videoId)
      .get()
      .then((doc) => {
        data = doc.data();
        setComments(data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <Comment.Group size="large">
        <Header as="h3">Comments</Header>
        {comments.map((comment) => {
          return <VideoComment comment={comment} />;
        })}
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Form.TextArea onChange={handleChange} placeholder="Add a comment" />
          <Form.Field className="d-flex justify-content-end">
            <Button
              content="Add Comment"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form.Field>
        </Form>
      </Comment.Group>
      <ToastContainer />
    </div>
  );
};

export default VideoComments;
