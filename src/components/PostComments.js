import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

const PostComments = () => {

    const handleChange=(e)=>{
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
      <Comment.Group size="large">
        <Header as="h3">Comments</Header>
        {/*comments.map((comment) => {
          return <VideoComment comment={comment} />;
        })*/}
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Form.TextArea onChange={handleChange} />
          <Button
            content="Add Comment"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    </div>
  );
};

export default PostComments;
