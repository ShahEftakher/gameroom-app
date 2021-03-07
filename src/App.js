import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useUserContext } from './context/UserContext';
import Editprofile from './pages/Editprofile';
import Forumpage from './pages/Forumpage';
import Homepage from './pages/HomePage';
import Login from './pages/Login';
import PostPage from './pages/PostPage';
import Profilepage from './pages/Profilepage';
import Signup from './pages/Signup';
import Uploadvideo from './pages/Uploadvideo';
import VideoPage from './pages/VideoPage';
import Privateroute from './Privateroute';

function App() {
  const { userInfo } = useUserContext();
  return (
    <BrowserRouter>
      <Route path={'/login'} exact component={Login} />
      <Route path={'/signup'} exact component={Signup} />
      <Route path={'/'} exact component={Homepage} />
      <Route path={'/forum'} exact component={Forumpage} />
      <Route path={'/forum/post/:id'} exact component={PostPage} />
      <Privateroute path={'/profile/:id'} exact component={Profilepage} />
      <Privateroute path={'/editprofile'} exact component={Editprofile} />
      <Privateroute path={'/upload'} exact component={Uploadvideo} />
      <Privateroute path={'/video/:id'} exact component={VideoPage} />
    </BrowserRouter>
  );
}

export default App;
