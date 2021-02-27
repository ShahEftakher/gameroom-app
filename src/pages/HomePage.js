import React from "react";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import VideoContainer from "../components/VideoContainer";
import UserContainer from "../components/UserContainer";
import Videocard from "../components/Videocard";
import Usercard from "../components/Usercard";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-3">
        <CarouselComp />
        <div class="row p-2 mb-1">
          <VideoContainer>
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
          </VideoContainer>
          <UserContainer>
            <Usercard />
            <Usercard />
          </UserContainer>
        </div>
        <div class="row p-2 mt-1">
          <VideoContainer>
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
          </VideoContainer>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
