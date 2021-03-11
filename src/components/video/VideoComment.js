import React from 'react';
import { Link } from 'react-router-dom';
import { Comment, Header, Form, Button } from 'semantic-ui-react';

const VideoComment = ({ comment }) => {
  return (
    <div>
      <Comment className="mt-3 p-1">
        <Comment.Avatar as="a" src={comment.imageUrl} />
        <Comment.Content>
          <Link to={'/userprofile/' + comment.uid}>
            <Comment.Author as="a">{comment.author}</Comment.Author>
          </Link>
          <Comment.Metadata>
            <span>{comment.created_time}</span>
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
        </Comment.Content>
      </Comment>
    </div>
  );
};

export default VideoComment;
