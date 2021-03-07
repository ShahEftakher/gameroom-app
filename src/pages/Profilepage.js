import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Profilecard from '../components/Profilecard';
import MentorStats from '../components/MentorStats';
import { db } from '../firebase';
import VideoContainer from '../components/VideoContainer';
import { useUserContext } from '../context/UserContext';

const Profilepage = () => {
  const userId = window.location.pathname.split('/').pop();
  console.log(userId);
  const [videos, setVideos] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [role, setRole] = useState('');
  const { currentUser } = useUserContext();
  console.log(currentUser);

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

  const getRole = () => {
    let temp_role = localStorage.getItem('userid');
    console.log(temp_role);
    setRole(temp_role);
  };

  const getVideosUser = async () => {
    console.log(userInfo.uid);
  };

  useEffect(() => {
    getUserInfo(userId);
    getRole();
  }, []);

  return (
    <div>
      <Navbar />
      <div class="container mt-4">
        <div class="row">
          <div class="col-sm-3">{<Profilecard userInfo={userInfo} />}</div>
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
