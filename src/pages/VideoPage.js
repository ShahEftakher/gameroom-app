import React from 'react';
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/Videoplayer';
///// 1. view count++
//// 2. like count++
const VideoPage = (props) => {
  const video = props.history.location.video;
  return (
    <div>
      <Navbar />
      <VideoPlayer url={video.videoUrl} />
    </div>
  );
};

export default VideoPage;
