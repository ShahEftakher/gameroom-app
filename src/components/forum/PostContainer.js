import React, { useEffect, useState } from 'react'
import ForumPost from '../../components/forum/ForumPost'
import { useUserContext } from '../../context/UserContext'
import { db } from '../../firebase'

const PostContainer = () => {
  const { currentUser } = useUserContext()
  const [posts, setPosts] = useState([])

  const getPost = () => {
    console.log(posts)
    console.log('fml')
    let data = []
    console.log(data)
    db.collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          data.push({ id: doc.id, post: doc.data() })
        })
        setPosts(data)
        data = []
      })
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      <div className='mb-4'>
        {posts.map(post => {
          return <ForumPost id={post.id} post={post.post} />
        })}
      </div>
    </div>
  )
}

export default PostContainer
