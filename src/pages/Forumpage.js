import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import ForumPost from '../components/ForumPost';
import Navbar from '../components/Navbar';
import { useUserContext } from '../context/UserContext';
import { db } from '../firebase';

const Forumpage = () => {
  const { currentUser } = useUserContext();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [change, setChange] = useState(true);

  const handleChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost) {
      return;
    }
    db.collection('posts')
      .add({
        uid: currentUser.uid,
        name: currentUser.displayName,
        body: newPost,
        upvote: 0,
        comments: [],
        avatarImg: currentUser.photoURL,
        created_time: new Date().toLocaleTimeString(),
        created_date: new Date().toLocaleDateString(),
      })
      .then(() => {
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPost = () => {
    console.log(posts);
    console.log('fml');
    let data = [];
    console.log(data);
    db.collection('posts')
      .orderBy('created_time', 'desc')
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
      <Navbar />
      {currentUser ? (
        <div className="mb-4 d-flex justify-content-center">
          <Form
            className="w-25 border mt-3 shadow p-3 mb-5 bg-body rounded"
            onSubmit={handleSubmit}
          >
            <h6 className="display-6">Ask</h6>
            <Form.Field>
              <Form.TextArea
                className=""
                placeholder="Ask the gamers anything!"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className="d-flex justify-content-end">
              <Button>ASK!</Button>
            </Form.Field>
          </Form>
        </div>
      ) : (
        ''
      )}
      {posts.map((post) => {
        return <ForumPost id={post.id} post={post.post} />;
      })}
    </div>
  );
};

export default Forumpage;
