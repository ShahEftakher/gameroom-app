import React from "react";
import Navbar from "../components/Navbar";
import Profilecard from "../components/Profilecard";
import MentorStats from "../components/MentorStats";

const Profilepage = () => {
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
              <MentorStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profilepage;
