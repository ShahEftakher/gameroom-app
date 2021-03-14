import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Editprofile from './pages/profilepage/Editprofile';
import Forumpage from './pages/forumpages/Forumpage';
import Gallerypage from './pages/videopages/Gallerypage';
import Homepage from './pages/homepage/HomePage';
import Login from './pages/Authpages/Login';
import PostPage from './pages/forumpages/PostPage';
import Profilepage from './pages/profilepage/Profilepage';
import Signup from './pages/Authpages/Signup';
import Uploadvideo from './pages/videopages/Uploadvideo';
import VideoPage from './pages/videopages/VideoPage';
import Privateroute from './Privateroute';
import ForgotPassword from './pages/Authpages/ForgotPassword';
import ResetPassword from './pages/profilepage/ResetPassword';
import Userprofilepage from './pages/profilepage/Userprofilepage';

function App() {
  return (
    <BrowserRouter>
      <Route path={'/login'} exact component={Login} />
      <Route path={'/forgot-password'} exact component={ForgotPassword} />
      <Route path={'/signup'} exact component={Signup} />
      <Route path={'/'} exact component={Homepage} />
      <Route path={'/forum'} exact component={Forumpage} />
      <Route path={'/gallery'} exact component={Gallerypage} />
      <Route path={'/forum/post/:id'} exact component={PostPage} />
      <Privateroute
        path={'/userprofile/:id'}
        exact
        component={Userprofilepage}
      />
      <Privateroute path={'/profile/:id'} exact component={Profilepage} />
      <Privateroute path={'/editprofile'} exact component={Editprofile} />
      <Privateroute path={'/upload'} exact component={Uploadvideo} />
      <Privateroute path={'/video/:id'} exact component={VideoPage} />
      <Privateroute path={'/reset-password'} exact component={ResetPassword} />
    </BrowserRouter>
  );
}

export default App;
