import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Editprofile from './pages/Editprofile';
import Forumpage from './pages/Forumpage';
import Gallerypage from './pages/Gallerypage';
import Homepage from './pages/HomePage';
import Login from './pages/Login';
import PostPage from './pages/PostPage';
import Profilepage from './pages/Profilepage';
import Signup from './pages/Signup';
import Uploadvideo from './pages/Uploadvideo';
import VideoPage from './pages/VideoPage';
import Privateroute from './Privateroute';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

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
      <Privateroute path={'/profile/:id'} exact component={Profilepage} />
      <Privateroute path={'/editprofile'} exact component={Editprofile} />
      <Privateroute path={'/upload'} exact component={Uploadvideo} />
      <Privateroute path={'/video/:id'} exact component={VideoPage} />
      <Privateroute path={'/reset-password'} exact component={ResetPassword} />
    </BrowserRouter>
  );
}

export default App;
