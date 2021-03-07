import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import CarouselComp from '../components/CarouselComp';
import VideoContainer from '../components/VideoContainer';
import UserContainer from '../components/UserContainer';
import Usercard from '../components/Usercard';
import { db } from '../firebase';

const Homepage = () => {
  const [newVideos, setNewVideos] = useState([]);
  const [mostLiked, setMostLiked] = useState([]);
  const loadVideos = async () => {
    db.collection('videos').onSnapshot((querysnapShot) => {
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
        <CarouselComp />

        <VideoContainer videos={newVideos} title={'New Videos'} />

        <VideoContainer videos={mostLiked} title={'Most Popular Videos'} />
      </div>
    </div>
  );
};

export default Homepage;
