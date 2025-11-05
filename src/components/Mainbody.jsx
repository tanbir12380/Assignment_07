import React, { useState } from "react";
import Banner from "./Banner";
import Ticket from "./Ticket";
import "./Our.css";
import TaskStatus from "./TaskStatus";

const Mainbody = ({
  allData,
  setAllData,
  resolved,
  setresolved,
  pending,
  setpending,
  pCount,
  setPcount,
  rCount,
  setRcount,
}) => {
  const [show, setshow] = useState(true);

  return (
    <>
      <Banner
        pCount={pCount}
        setPcount={setPcount}
        rCount={rCount}
        setRcount={setRcount}
      ></Banner>
      <div className="shifter">
        <button
          onClick={() => {
            setshow(true);
          }}
        >
          Tickets
        </button>
        <button
          onClick={() => {
            setshow(false);
          }}
        >
          Tasks
        </button>
      </div>
      <div id="middle-container">
        <Ticket
          class11={show === true ? "" : "hide-contain"}
          pCount={pCount}
          setPcount={setPcount}
          pending={pending}
          setpending={setpending}
          setAllData={setAllData}
          allData={allData}
        ></Ticket>
        <TaskStatus
          class11={show === true ? "hide-contain" : ""}
          pCount={pCount}
          setPcount={setPcount}
          rCount={rCount}
          setRcount={setRcount}
          pending={pending}
          setpending={setpending}
          resolved={resolved}
          setresolved={setresolved}
          allData={allData}
          setAllData={setAllData}
        ></TaskStatus>
      </div>
    </>
  );
};

export default Mainbody;
