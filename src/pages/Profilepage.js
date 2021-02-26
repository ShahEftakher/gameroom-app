import React from "react";
import Navbar from "../components/Navbar";
import Profilecard from "../components/Profilecard";


const Profilepage = () => {
  return (
    <div>
      <Navbar />
      <div class="container mt-4">
        <div class="row">
          <div class="col-sm-3 ">
            <Profilecard />
          </div>
          <div class="col-sm-9 border ">
            <div class="row">
              <div class="col-8 col-sm-6 border">Level 2: .col-8 .col-sm-6</div>
              <div class="col-4 col-sm-6 border">Level 2: .col-4 .col-sm-6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profilepage;
