import React from "react";
import SubTic from "./SubTicket";

const Ticket = ({
  allData,
  setAllData,
  pending,
  setpending,
  pCount,
  setPcount,
}) => {
  return (
    <div id="Ticker-container-pro">
      <h2 id="ticket-header">Customer Tickets</h2>

      <div className="Tickets">
        {/* card start */}

        {allData.map((data, index) => (
          <SubTic
            key={index}
            allDatas={allData}
            allData={data}
            setAllData={setAllData}
            pCount={pCount}
            setPcount={setPcount}
            pending={pending}
            setpending={setpending}
          ></SubTic>
        ))}

        {/* card end */}
      </div>
    </div>
  );
};

export default Ticket;
