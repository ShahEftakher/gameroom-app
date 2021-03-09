import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Profilecard from '../../components/profile/Profilecard';
import MentorStats from '../../components/profile/MentorStats';
import { db } from '../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import VideoContainerV2 from '../../components/video/VideoContainerV2';

const Profilepage = () => {
  const userId = window.location.pathname.split('/').pop();
  console.log(userId);
  const [videos, setVideos] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async (id) => {
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

  const getVideosUser = async () => {
    let temp_video = [];
    db.collection('videos')
      .where('uid', '==', userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          temp_video.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setVideos(temp_video);
      });
  };

  useEffect(() => {
    getUserInfo(userId);
    getVideosUser();
  }, []);

  return (
    <div>
      <Navbar />
      <div class="container mt-4">
        <ToastContainer />
        <div class="row">
          <div class="col-sm-3">{<Profilecard userInfo={userInfo} />}</div>
          <div class="col-sm-9">
            <div class="row">
              {/*condtionally rendered based on role*/}
              {userInfo.role === 'mentor' ? <MentorStats /> : ''}
            </div>
            {userInfo.role === 'mentor' ? (
              <VideoContainerV2 videos={videos} title={'My videos'} />
            ) : (
              ''
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Profilepage;
