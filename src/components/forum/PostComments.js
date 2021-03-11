import React, { useEffect, useState } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import { useUserContext } from '../../context/UserContext';
import { db } from '../../firebase';
import PostComment from './PostComment';
import { toast, ToastContainer } from 'react-toastify';

const PostComments = ({ id }) => {
  const [newComment, setnewComment] = useState();
  const { currentUser } = useUserContext();
  const [comments, setComments] = useState([]);
  const handleChange = (e) => {
    setnewComment(e.target.value);
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
      created_date: new Date().toLocaleDateString(),
    };
    let temp_comments = [...comments];
    temp_comments.push(temp_new_comment);

    setComments(temp_comments);
    console.log(comments);
    db.collection('posts')
      .doc(id)
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
    db.collection('posts')
      .doc(id)
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
  });

  return (
    <div className="d-flex justify-content-center">
      <ToastContainer />
      <Comment.Group
        size="large"
        className="w-75 shadow-sm p-3 bg-body rounded"
      >
        <Header as="h3">Comments</Header>
        <hr></hr>
        {currentUser ? (
          <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.TextArea onChange={handleChange} />
            <div className="d-flex justify-content-end">
              <Button
                content="Add Comment"
                labelPosition="right"
                icon="edit"
                primary
              />
            </div>
          </Form>
        ) : (
          ''
        )}
        {comments.map((comment) => {
          return <PostComment comment={comment} />;
        })}
      </Comment.Group>
    </div>
  );
};

export default PostComments;
