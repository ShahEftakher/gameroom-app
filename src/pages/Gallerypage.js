import React, { useEffect, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import GalleryVideo from '../components/GalleryVideoCard';
import Navbar from '../components/Navbar';
import VideoFilter from '../components/VideoFilter';
import { db } from '../firebase';

export default function Gallerypage() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    let data = [];
    db.collection('videos')
      .orderBy('created_time', 'desc')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        console.log(data);
        setVideos(data);
      });
  };

  const getVideosByValorant = () => {
    let data = [];
    db.collection('videos')
      .where('category', '==', 'Valorant')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setVideos(data);
      });
  };

  const getVideosByR6 = () => {
    let data = [];
    db.collection('videos')
      .where('category', '==', 'R6')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setVideos(data);
      });
  };

  const getVideosCSGO = () => {
    let data = [];
    db.collection('videos')
      .where('category', '==', 'CSGO')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        console.log(data);
        setVideos(data);
      });
  };

  const getPopularVideo = () => {
    let data = [];
    db.collection('videos')
      .orderBy('likes', 'desc')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        console.log(data);
        setVideos(data);
      });
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-end me-5">
        <VideoFilter
          getPopularVideo={getPopularVideo}
          getNewestVideo={getVideos}
        />
        <CategoryFilter
          getVideosByValorant={getVideosByValorant}
          getVideosByR6={getVideosByR6}
          getVideosCSGO={getVideosCSGO}
        />
      </div>
      <div className="mt-3">
        {videos.map((video) => {
          return <GalleryVideo id={video.id} video={video.data} />;
        })}
      </div>
    </div>
  );
}
