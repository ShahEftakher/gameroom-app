import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Select } from 'semantic-ui-react';
import Navbar from '../components/Navbar';
import Videoplayer from '../components/Videoplayer';
import { useUserContext } from '../context/UserContext';
import { db, storage } from '../firebase';

const Uploadvideo = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const { currentUser } = useUserContext();

  const [loading, setLoading] = useState({});
  const [disabled, setDisable] = useState({});

  const history = useHistory();

  const handleChange = async (e) => {
    setDisable({ disabled: 'disabled' });
    setLoading({ loading: 'loading' });
    const videoFile = e.target.files[0];
    const storageRef = storage.ref();
    const videoRef = storageRef.child(videoFile.name);
    await videoRef.put(videoFile);
    const fileUrl = await videoRef.getDownloadURL();
    setVideoUrl(fileUrl);
    setDisable({});
    setLoading({});
  };

  const handleSelect = (event, data) => {
    setCategory(data.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescTitle = (e) => {
    setDescription(e.target.value);
  };

  const categories = [
    { key: 'csgo', value: 'CSGO', text: 'CSGO' },
    { key: 'r6', value: 'R6', text: 'R6' },
    { key: 'valorant', value: 'Vanlorant', text: 'Valorant' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description && !title) {
      return;
    }
    db.collection('videos')
      .add({
        uid: currentUser.uid,
        title: title,
        description: description,
        category: category,
        videoUrl: videoUrl,
        userName: currentUser.displayName,
      })
      .then(() => {
        history.push('/profile');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div class="row align-items-center">
        {videoUrl ? <Videoplayer url={videoUrl} className="w-75 h-75"/> : ''}
        <div class="d-flex justify-content-center mt-5 mb-5">
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <input type="file" onChange={handleChange} accept="video/*" />
            </Form.Field>
            <Form.Field>
              <label>Video Title</label>
              <input
                type="text"
                style={{ minWidth: '26.5rem' }}
                onChange={handleTitleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input type="text" onChange={handleDescTitle} />
            </Form.Field>
            <Form.Field>
              <label>Choose Category</label>
              <Select
                placeholder="Select Category"
                options={categories}
                onChange={handleSelect}
              />
            </Form.Field>
            <Form.Field>
              <input
                className="w-100 btn btn-primary"
                type="submit"
                value="Upload"
                {...loading}
                {...disabled}
              />
            </Form.Field>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Uploadvideo;
