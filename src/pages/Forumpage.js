import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import ForumPost from '../components/ForumPost';
import Navbar from '../components/Navbar';

const Forumpage = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-4 d-flex justify-content-center">
        <Form className="w-25 border mt-3 shadow p-3 mb-5 bg-body rounded">
          <h6 className="display-6">Ask</h6>
          <Form.Field>
            <Form.TextArea
              className=""
              placeholder="Ask the gamers anything!"
            />
          </Form.Field>
          <Form.Field className="d-flex justify-content-end">
            <Button>ASK!</Button>
          </Form.Field>
        </Form>
      </div>
      <ForumPost />
      <ForumPost />
    </div>
  );
};

export default Forumpage;
