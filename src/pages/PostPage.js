import React from 'react';
import { Avatar } from '@material-ui/core';
import { Card } from 'semantic-ui-react';
import Navbar from '../components/Navbar';

const PostPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-5 mt-3 w-75">
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
    </div>
  );
};

export default PostPage;
