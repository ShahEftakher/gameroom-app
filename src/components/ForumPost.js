import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { Card } from 'semantic-ui-react';

const ForumPost = ({ id, post }) => {
  return (
    <div className="mx-5 mt-3 mb-3">
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to={'forum/post/' + id}
      >
        <Card fluid color="orange" header="Option 2">
          <h6 className="card-header d-flex">
            <Avatar src={post.avatarImg} sizes="large" />
            <p className="ms-2 fs-3">{post.name}</p>
          </h6>
          <div className="card shadow-sm p-3 bg-body rounded">
            <div className="card-body">
              <p>{post.created_time}</p>
              <h3 className="card-title display-6">{post.body}</h3>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ForumPost;
