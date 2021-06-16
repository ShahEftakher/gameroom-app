import Editprofile from "../pages/profilepage/Editprofile";
import Profilepage from "../pages/profilepage/Profilepage";
import ResetPassword from "../pages/profilepage/ResetPassword";
import UserprofilePage from "../pages/profilepage/Userprofilepage";
import Uploadvideo from "../pages/videopages/Uploadvideo";
import VideoPage from "../pages/videopages/VideoPage";

export const PROTECTED_ROUTE = [
  { path: "/userprofile/:id", component: UserprofilePage },
  { path: "/editprofile", component: Editprofile },
  { path: "/profile/:id", component: Profilepage },
  { path: "/upload", component: Uploadvideo },
  { path: "/video/:id", component: VideoPage },
  { path: "/reset-password", component: ResetPassword },
];
