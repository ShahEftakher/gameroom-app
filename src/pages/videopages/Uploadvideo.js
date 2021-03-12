import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Form, Select } from 'semantic-ui-react';
import Navbar from '../../components/common/Navbar';
import ProgressBar from '../../components/video/ProgressBar';
import Videoplayer from '../../components/video/Videoplayer';
import { useUserContext } from '../../context/UserContext';
import { db, storage } from '../../firebase';

const Uploadvideo = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const { currentUser } = useUserContext();

  const [loading, setLoading] = useState({});
  const [disabled, setDisable] = useState({});
  let [progress, setProgress] = useState(null);
  const history = useHistory();
  const [thumbnail, setThumbnail] = useState(null);

  const handleChange = async (e) => {
    setDisable({ disabled: 'disabled' });
    setLoading({ loading: 'loading' });
    const videoFile = e.target.files[0];
    const storageRef = storage.ref();
    const videoRef = storageRef.child(videoFile.name);
    let uploadTask = videoRef.put(videoFile);
    uploadTask.on(
      'state_changed',
      function (snapshot) {
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      null,

      async function () {
        const fileUrl = await videoRef.getDownloadURL();
        setVideoUrl(fileUrl);
        setDisable({});
        setLoading({});
      }
    );
  };

  const handleThumbnail = async (e) => {
    const videoThumb = e.target.files[0];
    const storageRef = storage.ref();
    const thumbRef = storageRef.child(videoThumb.name);
    await thumbRef.put(videoThumb);
    setThumbnail(await thumbRef.getDownloadURL());
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
    { key: 'valorant', value: 'Valorant', text: 'Valorant' },
  ];

  const uploadSuccessToast = () => {
    toast.success('Video uploaded!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorToast = () => {
    toast.warning('Enter title and description', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const errorToastNoVideo = () => {
    toast.warning('Add your video', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const errorToastCategory = () => {
    toast.warning('Select a category', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description || !title) {
      errorToast();
      return;
    }
    if (!category) {
      errorToastCategory();
      return;
    }
    if (!videoUrl) {
      errorToastNoVideo();
      return;
    }
    setDisable({ disabled: 'disabled' });
    db.collection('videos')
      .add({
        uid: currentUser.uid,
        title: title,
        description: description,
        category: category,
        videoUrl: videoUrl,
        userName: currentUser.displayName,
        createdAt: new Date().toISOString(),
        thumbnail: thumbnail,
        created_time: new Date().toLocaleTimeString(),
        created_date: new Date().toLocaleDateString(),
        likes: 0,
        comments: [],
      })
      .then(() => {
        uploadSuccessToast();
        history.push('/profile/' + currentUser.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="row align-items-center">
        <div className="d-flex justify-content-center">
          <div className="w-75">
            {videoUrl ? (
              <div className="row">
                <div className="col">
                  <Videoplayer url={videoUrl} />
                </div>
                <div className="col d-flex justify-content-center w-75 h-50">
                  <img src={thumbnail} />
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div class="d-flex justify-content-center mt-5 mb-5">
          <Form onSubmit={handleSubmit}>
            {progress === 100 ? (
              <>Video added</>
            ) : progress != null ? (
              <>Adding the video...</>
            ) : null}
            {progress && (
              <div className="mb-4">
                <ProgressBar progress={progress} />
              </div>
            )}
            <Form.Field>
              <label>Add video</label>
              <input type="file" onChange={handleChange} accept="video/*" />
            </Form.Field>
            <Form.Field>
              <label>Add Thumbnail for video</label>
              <input type="file" onChange={handleThumbnail} accept="image/*" />
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
