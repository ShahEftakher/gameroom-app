import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Profilecard from '../components/Profilecard';
import MentorStats from '../components/MentorStats';
import { db } from '../firebase';
import VideoContainer from '../components/VideoContainer';

const Profilepage = () => {
  const [videos, setVideos] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = () => {
    let getInfo = JSON.parse(localStorage.getItem('userid'));
    console.log(typeof getInfo);
    console.log(getInfo);
    setUserInfo({new: 'mew new'});
    console.log(userInfo);
  };

  const getVideosUser = async () => {
    console.log(userInfo.uid);
  };

  const showUID = () => {
    console.log(userInfo.uid);
  };

  useEffect(() => {
    getUserInfo();
    console.log(userInfo);
    getVideosUser();
    showUID();
  }, []);

  return (
    <div>
      <Navbar />
      <div class="container mt-4">
        <div class="row">
          <div class="col-sm-3">
            <Profilecard userInfo={userInfo} />
          </div>
          <div class="col-sm-9">
            <div class="row">
              {/*condtionally rendered based on role*/}
              {userInfo.role === 'mentor' ? <MentorStats /> : ''}
            </div>
            {userInfo.role === 'mentor' ? (
              <VideoContainer videos={videos} />
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
