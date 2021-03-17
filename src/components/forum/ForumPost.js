import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { Card } from 'semantic-ui-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const ForumPost = ({ id, post }) => {
  dayjs.extend(relativeTime)
  return (
    <div className='mx-5 mt-3 mb-3 w-75'>
      <Link
        className='text-decoration-none'
        style={{ color: 'black' }}
        to={'/forum/post/' + id}
      >
        <Card fluid color='orange' header='Option 2' onClick={() => {}}>
          <h6 className='card-header d-flex'>
            <Avatar src={post.avatarImg} sizes='large' />
            <p className='ms-2 fs-3 text-body'>{post.name}</p>
          </h6>
          <div className='card shadow-sm p-2 bg-body rounded'>
            <p className='text-muted'>
              {/* subheader={dayjs(createdAt).fromNow()} */}

              <em>{dayjs(post.createdAt).fromNow()}</em>
            </p>
            <blockquote class='blockquote text-dark'>
              <p>{post.body}</p>
            </blockquote>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default ForumPost
