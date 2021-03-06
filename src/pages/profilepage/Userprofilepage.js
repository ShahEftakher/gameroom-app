import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { db } from '../../firebase';
import VideoContainer from '../../components/video/VideoContainer';
import { ToastContainer } from 'react-toastify';
import Userprofile from '../../components/profile/UserProfile';

const UserprofilePage = () => {
  const userId = window.location.pathname.split('/').pop();
  const [userInfo, setUserInfo] = useState({});
  const [videos, setVideos] = useState([]);

  const getUser = (id) => {
    let user;
    db.collection('users')
      .doc(id)
      .get()
      .then((doc) => {
        user = doc.data();
      })
      .then(() => {
        setUserInfo(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVideos = () => {
    let data = [];
    db.collection('videos')
      .where('uid', '==', userId)
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

  useEffect(() => {
    getUser(userId);
    getVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <div class="container-lg fluid mt-4">
        <ToastContainer />
        <div class="row">
          <div class="col-sm-3">{<Userprofile userInfo={userInfo} />}</div>
          <div class="col-sm-9">
            {userInfo.role === 'mentor' ? (
              <VideoContainer videos={videos} title={'My videos'} />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserprofilePage;
