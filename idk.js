const getPost = async () => {
  console.log(posts);
  console.log('fml');
  let data = [];
  db.collection('posts')
    .orderBy('created_at', 'desc')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, post: doc.data() });
      });
      setPosts(data);
    });
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
      created_at: new Date().toLocaleString(),
    })
    .then(() => {
      e.target.reset();
    })
    .catch((err) => {
      console.log(err);
    });
};
