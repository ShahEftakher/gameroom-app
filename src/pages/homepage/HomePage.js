import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import CarouselComp from '../../components/common/CarouselComp';
import VideoContainer from '../../components/video/VideoContainer';
import UserContainer from '../../components/profile/UserContainer';
import Usercard from '../../components/profile/Usercard';
import { db } from '../../firebase';
import { ToastContainer } from 'react-toastify';
import { useUserContext } from '../../context/UserContext';
import Footer from '../../components/common/Footer';

const Homepage = () => {
  const [newVideos, setNewVideos] = useState([]);
  const [mostLiked, setMostLiked] = useState([]);
  const { currentUser } = useUserContext();
  const [users, setUsers] = useState([]);

  const popularUser = [{ name: 'me0' }, { name: 'he' }];

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

  const getUser = () => {
    let temp_user = [];
    db.collection('users')
      .limit(3)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          temp_user.push({
            id: doc.id,
            user: doc.data(),
          });
        });
        setUsers(temp_user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadVideos();
    getMostLikedVideo();
    getUser()
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-3">
        <ToastContainer />
        <CarouselComp />
        <div className="d-flex">
          <div className="w-75">
            <VideoContainer
              videos={newVideos}
              title={'Latest Videos'}
              uid={currentUser}
            />
            <VideoContainer
              videos={mostLiked}
              title={'Most Popular Videos'}
              uid={currentUser}
            />
          </div>
          <div className="w-25 d-flex justify-content-center">
            {/* <UserContainer users={users} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
