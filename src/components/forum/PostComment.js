import React from 'react';
import { Button, Comment } from 'semantic-ui-react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';

const PostComment = ({ comment }) => {
  return (
    <div className="container border mt-3 shadow-sm p-3 mb-3 bg-body rounded">
      <div className="row">
        <Comment className="mt-3 p-1 col-sm-8">
          <Comment.Avatar as="a" src={comment.imageUrl} />
          <Comment.Content>
            <Link to={'/userprofile/' + comment.uid}>
              <Comment.Author as="a">{comment.author}</Comment.Author>
            </Link>
            <Comment.Metadata>
              <span>{comment.createdAt}</span>
            </Comment.Metadata>
            <Comment.Text>{comment.body}</Comment.Text>
          </Comment.Content>
        </Comment>
        <div className="col-sm-4 mt-4">
          <Button type="button" color="red" style={{ marginLeft: '55%' }}>
            <FavoriteBorderIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
