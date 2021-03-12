import React, { useEffect, useState } from 'react';
import ForumPost from '../../components/forum/ForumPost';
import { useUserContext } from '../../context/UserContext';
import { db } from '../../firebase';

const PostContainer = ({ uid }) => {
  const { currentUser } = useUserContext();
  const [posts, setPosts] = useState([]);

  const getPost = () => {
    let data = [];
    console.log(data);
    db.collection('posts')
      .orderBy('createdAt', 'desc')
      .where('uid', '==', uid)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, post: doc.data() });
        });
        setPosts(data);
        data = [];
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <div className="mb-4">
        <h2>Posts</h2>
        <hr></hr>
        {posts.map((post) => {
          return <ForumPost id={post.id} post={post.post} />;
        })}
      </div>
    </div>
  );
};

export default PostContainer;
