import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import CarouselComp from '../components/CarouselComp';
import VideoContainer from '../components/VideoContainer';
import UserContainer from '../components/UserContainer';
import Videocard from '../components/Videocard';
import Usercard from '../components/Usercard';
import Loginmodal from '../components/Loginmodal';
import { db } from '../firebase';

const Homepage = () => {
  const [videos, setVideos] = useState([]);
  const loadVideos = async () => {
    db.collection('videos').onSnapshot((querysnapShot) => {
      let tempVideos = [];
      querysnapShot.forEach((doc) => {
        tempVideos.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setVideos(tempVideos);
    });
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-3">
        <CarouselComp />
        <div class="row p-2 mb-1">
          <div className="w-100">
            <VideoContainer videos={videos} />
          </div>
        </div>
        <div class="row p-2 mt-1">
          <VideoContainer videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
