import ForgotPassword from "../pages/Authpages/ForgotPassword";
import Login from "../pages/Authpages/Login";
import Signup from "../pages/Authpages/Signup";
import Forumpage from "../pages/forumpages/Forumpage";
import PostPage from "../pages/forumpages/PostPage";
import Homepage from "../pages/homepage/HomePage";
import Gallerypage from "../pages/videopages/Gallerypage";

export const GLOBAL_ROUTES = [
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/signup", component: Signup },
  { path: "/", component: Homepage },
  { path: "/forum", component: Forumpage },
  { path: "/gallery", component: Gallerypage },
  { path: "/forum/post/:id", component: PostPage },
];
