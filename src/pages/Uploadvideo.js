import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import Navbar from '../components/Navbar';
import Videoplayer from '../components/Videoplayer';
import { storage } from '../firebase';

const Uploadvideo = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const handleChange = async (e) => {
    const videoFile = e.target.files[0];
    const storageRef = storage.ref();
    const videoRef = storageRef.child(videoFile.name);
    await videoRef.put(videoFile);
    const fileUrl = await videoRef.getDownloadURL();
    setVideoUrl(fileUrl);
  };
  return (
    <div>
      <Navbar />
      <div class="row align-items-center">
        {videoUrl ? <Videoplayer url={videoUrl} /> : ''}
        <div class="d-flex justify-content-center mt-5 mb-5">
          <Form>
            <Form.Field>
              <input type="file" onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Video Title</label>
              <input type="text" style={{ minWidth: '26.5rem' }} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input type="text" />
            </Form.Field>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Uploadvideo;
