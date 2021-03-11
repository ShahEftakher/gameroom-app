import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import VideoPlayer from '../../components/video/Videoplayer';
import { db } from '../../firebase';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VideoComments from '../../components/video/VideoComments';
import { Link } from 'react-router-dom';

const VideoPage = (props) => {
  const videoId = window.location.pathname.split('/').pop();
  const [videoData, setVideoData] = useState('');
  const [likes, setLikes] = useState(0);
  const [disabled, setDisable] = useState({});

  const addLike = () => {
    setLikes(likes + 1);
    setDisable({ disabled: 'disabled' });
    console.log(likes);
    db.collection('videos')
      .doc(videoId)
      .update({ likes: likes + 1 })
      .then(() => {
        console.log('updated');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVideo = (id) => {
    let data;
    db.collection('videos')
      .doc(id)
      .get()
      .then((doc) => {
        data = doc.data();
        setLikes(data.likes);
        setVideoData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVideo(videoId);
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        <VideoPlayer url={videoData.videoUrl} title={videoData.title} />
      </div>
      <div className="p-4 ms-4">
        <div className="row">
          <div className="col">
            <h2 className="text-capitalize">{videoData.title}</h2>
            <p className="text-muted">Uploaded at: {videoData.created_time}</p>
          </div>
          <div className="col d-flex justify-content-end">
            <button
              type="button"
              onClick={addLike}
              class="btn btn-outline-danger"
              {...disabled}
            >
              {likes} {'       '}
              <FavoriteBorderIcon />
            </button>
          </div>
        </div>
        <hr></hr>
        <p className="mb-2 fs-5 fw-lighter text-capitalize">{videoData.description}</p>
        <p>
          <Link to={'/userProfile/' + videoData.uid}>
            <h2>{videoData.userName}</h2>
          </Link>
        </p>

        <div className="p-1 mt-4">
          <VideoComments videoId={videoId} videoData={videoData} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
