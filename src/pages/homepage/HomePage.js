import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import CarouselComp from '../../components/common/CarouselComp';
import VideoContainer from '../../components/video/VideoContainer';
import UserContainer from '../../components/profile/UserContainer';
import Usercard from '../../components/profile/Usercard';
import { db } from '../../firebase';
import { ToastContainer } from 'react-toastify';

const Homepage = () => {
  const [newVideos, setNewVideos] = useState([]);
  const [mostLiked, setMostLiked] = useState([]);
  const loadVideos = async () => {
    db.collection('videos')
      .orderBy('createdAt', 'desc')
      .limit(8)
      .onSnapshot((querysnapShot) => {
        let tempVideos = [];
        querysnapShot.forEach((doc) => {
          tempVideos.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setNewVideos(tempVideos);
      });
  };

  const getMostLikedVideo = async () => {
    let temp_videos = [];
    db.collection('videos')
      .orderBy('likes', 'desc')
      .limit(8)
      .onSnapshot((querysnapShot) => {
        querysnapShot.forEach((doc) => {
          temp_videos.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setMostLiked(temp_videos);
      });
  };

  useEffect(() => {
    loadVideos();
    getMostLikedVideo();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-3">
        <ToastContainer />
        <CarouselComp />

        <VideoContainer videos={newVideos} title={'New Videos'} />
        <VideoContainer videos={mostLiked} title={'Most Popular Videos'} />
      </div>
    </div>
  );
};

export default Homepage;
