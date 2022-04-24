import React, { useEffect, useState } from 'react';
import CategoryFilter from '../../components/video/CategoryFilter';
import GalleryVideo from '../../components/video/GalleryVideoCard';
import Navbar from '../../components/common/Navbar';
import VideoFilter from '../../components/video/VideoFilter';
import { db } from '../../firebase';
import Footer from '../../components/common/Footer';
import { useCollection } from 'swr-firestore-v9';

export default function Gallerypage() {
  // const [videos, setVideos] = useState([]);

  // const getVideos = async () => {
  //   let data = [];
  //   db.collection('videos')
  //     .orderBy('createdAt', 'desc')
  //     .onSnapshot((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         data.push({
  //           id: doc.id,
  //           data: doc.data(),
  //         });
  //       });
  //       console.log(data);
  //       setVideos(data);
  //     });
  // };

  const { data, update, error } = useCollection(`videos`, {
    orderBy: ['likes', 'desc'],
    limit: 8,
    listen: true,
  });

  // const getVideosByValorant = () => {
  //   let data = [];
  //   db.collection('videos')
  //     .where('category', '==', 'Valorant')
  //     .onSnapshot((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         data.push({
  //           id: doc.id,
  //           data: doc.data(),
  //         });
  //       });
  //       setVideos(data);
  //     });
  // };

  // const getVideosByR6 = () => {
  //   let data = [];
  //   db.collection('videos')
  //     .where('category', '==', 'R6')
  //     .onSnapshot((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         data.push({
  //           id: doc.id,
  //           data: doc.data(),
  //         });
  //       });
  //       setVideos(data);
  //     });
  // };

  // const getVideosCSGO = () => {
  //   let data = [];
  //   db.collection('videos')
  //     .where('category', '==', 'CSGO')
  //     .onSnapshot((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         data.push({
  //           id: doc.id,
  //           data: doc.data(),
  //         });
  //       });
  //       console.log(data);
  //       setVideos(data);
  //     });
  // };

  // const getPopularVideo = () => {
  //   let data = [];
  //   db.collection('videos')
  //     .orderBy('likes', 'desc')
  //     .onSnapshot((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         data.push({
  //           id: doc.id,
  //           data: doc.data(),
  //         });
  //       });
  //       console.log(data);
  //       setVideos(data);
  //     });
  // };

  useEffect(() => {
    // setVideos([]);
    // getVideos();
  }, []);

  return (
    <>
      <div>
        {/* <Navbar /> */}
        <div className="d-flex justify-content-end me-5">
          <VideoFilter
            // getPopularVideo={getPopularVideo}
            // getNewestVideo={getVideos}
          />
          <CategoryFilter
            // getVideosByValorant={getVideosByValorant}
            // getVideosByR6={getVideosByR6}
            // getVideosCSGO={getVideosCSGO}
          />
        </div>
        <div className="mt-3">
          {data?.map((video) => {
            return <GalleryVideo id={video.id} video={video} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
