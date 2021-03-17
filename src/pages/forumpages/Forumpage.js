import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import ForumPost from '../../components/forum/ForumPost';
import Navbar from '../../components/common/Navbar';
import { useUserContext } from '../../context/UserContext';
import { db } from '../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../components/common/Footer';

const Forumpage = () => {
  const { currentUser } = useUserContext();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleChange = (e) => {
    setNewPost(e.target.value);
  };

  const errorToast = () => {
    toast.info('Write your post!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost) {
      errorToast();
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
        createdAt: new Date().toISOString(),

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
      .orderBy('createdAt', 'desc')
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
      <ToastContainer />
      {currentUser ? (
        <div className="mb-4 d-flex justify-content-center">
          <Form
            className="w-50 border mt-3 shadow p-3 mb-5 bg-body rounded"
            onSubmit={handleSubmit}
          >
            <h4 className="text-muted lead">Write a post</h4>
            <Form.Field>
              <Form.TextArea
                className=""
                placeholder="Ask the gamers anything!"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className="d-flex justify-content-end">
              <Button
                icon="pencil alternate"
                labelPosition="left"
                content="Post"
                positive
              />
            </Form.Field>
          </Form>
        </div>
      ) : (
        ''
      )}

      <div className="mb-4">
        <div className="p-3">
          <h2>Posts</h2>
          <hr></hr>
        </div>
        {posts.map((post) => {
          return <ForumPost id={post.id} post={post.post} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Forumpage;
