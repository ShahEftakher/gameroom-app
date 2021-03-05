import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Profilecard from '../components/Profilecard';
import MentorStats from '../components/MentorStats';
import { useUserContext } from '../context/UserContext';
import { db } from '../firebase';
import VideoContainer from '../components/VideoContainer';

const Profilepage = () => {
  const { userInfo, currentUser } = useUserContext();
  const [videos, setVideos] = useState([]);

  const getVideosUser = async (uid) => {
    console.log(uid)
    db.collection('videos')
      .where('uid', '==', uid)
      .onSnapshot((querySnapshot) => {
        let tempVideos = [];
        querySnapshot.forEach((doc) => {
          tempVideos.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setVideos(tempVideos);
      });
  };

  useEffect(() => {
    getVideosUser(userInfo.uid);
  }, []);

  return (
    <div>
      <Navbar />
      <div class="container mt-4">
        <div class="row">
          <div class="col-sm-3">
            <Profilecard />
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
