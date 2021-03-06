import React from 'react';
import { Comment,Header } from 'semantic-ui-react';

const VideoComment = ({ comment }) => {
  return (
    <div>
      <Comment className="mt-3 p-1">
        <Comment.Avatar as="a" src={/*comment.imageUrl*/} />
        <Comment.Content>
          <Comment.Author as="a">{/*comment.author*/}</Comment.Author>
          <Comment.Metadata>
            <span>Today at 5:42PM</span>
          </Comment.Metadata>
          <Comment.Text>{/*comment.body*/}</Comment.Text>
        </Comment.Content>
      </Comment>
    </div>
  );
};

export default VideoComment;
