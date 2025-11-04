import React from "react";
import Banner from "./Banner";
import Ticket from "./Ticket";
import "./Our.css";
import TaskStatus from "./TaskStatus";

{
  /*     
          pending={pending}
          setpending={setpending}
          resolved={resolved}
          setresolved={setresolved}
          allData={allData}
          setAllData={setAllData}
          pCount={pCount}
          setPcount={setPcount}
          rCount={rCount}
          setRcount={setRcount} */
}

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
  return (
    <>
      <Banner
        pCount={pCount}
        setPcount={setPcount}
        rCount={rCount}
        setRcount={setRcount}
      ></Banner>
      <div id="middle-container">
        <Ticket
          pCount={pCount}
          setPcount={setPcount}
          pending={pending}
          setpending={setpending}
          setAllData={setAllData}
          allData={allData}
        ></Ticket>
        <TaskStatus
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
