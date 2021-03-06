import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { Card } from 'semantic-ui-react';

const ForumPost = () => {
  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={'forum/post/454'}>
      <div className="mx-5 mt-3">
        <Card fluid color="orange" header="Option 2">
          <h5 className="card-header d-flex">
            <Avatar
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              sizes="large"
            />
            <h6 className="ms-2 display-6">me</h6>
          </h5>
          <div className="card shadow-sm p-3 bg-body rounded">
            <div className="card-body">
              <h3 className="card-title display-6">Special title treatment</h3>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
};

export default ForumPost;
