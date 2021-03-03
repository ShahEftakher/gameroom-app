import React from "react";
import Navbar from "../components/Navbar";
import Profilecard from "../components/Profilecard";
import MentorStats from "../components/MentorStats";
import { useUserContext } from "../context/UserContext";

const Profilepage = () => {
  const { userInfo } = useUserContext();
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
              {userInfo.role === "mentor" ? <MentorStats /> : ""}
            </div>
            {userInfo.role === "mentor" ? <button>Click meh</button> : ""}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Profilepage;
