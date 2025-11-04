import React from "react";
import Banner from "./Banner";
import Ticket from "./Ticket";
import "./Our.css";
import TaskStatus from "./TaskStatus";

const Mainbody = () => {
  return (
    <>
      <Banner></Banner>
      <div id="middle-container">
        <Ticket></Ticket>
        <TaskStatus></TaskStatus>
      </div>
    </>
  );
};

export default Mainbody;
