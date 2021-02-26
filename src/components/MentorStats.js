import React from "react";
import VideoContainer from "../components/VideoContainer";
import Videocard from "../components/Videocard";

const MentorStats = () => {
  return (
    <div className="p-1">
      <div class="container p-1">
        <div class="row p-1">
          <div class="col border border-dark p-3">
            <h1 class="display-6">Total views</h1>
            <p>210</p>
          </div>
          <div class="col border border-dark p-3">
            <h1 class="display-6">Total views</h1>
            <p>150</p>
          </div>
        </div>
        <div class="row p-1">
          <div class="col border border-dark p-3">
            <h1 class="display-6">Total views</h1>
            <p>150</p>
          </div>
          <div class="col border border-dark p-3">
            <h1 class="display-6">Total views</h1>
            <p>150</p>
          </div>
          <div class="col border border-dark p-3">
            <h1 class="display-6">Total views</h1>
            <p>150</p>
          </div>
        </div>
      </div>
      <VideoContainer>
        <Videocard />
        <Videocard />
        <Videocard />
        <Videocard />
      </VideoContainer>
    </div>
  );
};

export default MentorStats;