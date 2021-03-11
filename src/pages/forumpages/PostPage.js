import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { Card } from 'semantic-ui-react';
import Navbar from '../../components/common/Navbar';
import PostComments from '../../components/forum/PostComments';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

const PostPage = () => {
  const postId = window.location.pathname.split('/').pop();
  console.log(postId);
  const [post, setPost] = useState({});
  const getPost = (id) => {
    let temp_post;
    db.collection('posts')
      .doc(id)
      .get()
      .then((doc) => {
        temp_post = doc.data();
        console.log(temp_post);
        setPost(temp_post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost(postId);
  });

  return (
    <div>
      <Navbar />
      <div className="mx-5 mt-3 mb-5">
        <Card fluid className="mb-5" color="orange" header="Option 2">
          <h6 className="card-header d-flex">
            <Avatar src={post.avatarImg} sizes="large" />
            <Link to={'/userProfile/' + post.uid}>
              <p className="ms-2 fs-3">{post.name}</p>
            </Link>
          </h6>
          <div className="card shadow-sm p-3 bg-body rounded">
            <div className="card-body">
              <p>{post.created_time}</p>
              <h3 className="card-title display-6">{post.body}</h3>
            </div>
          </div>
        </Card>
        <div>
          <PostComments id={postId} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
