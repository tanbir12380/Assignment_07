import React from "react";

const Ticket = () => {
  return (
    <div className="Tickets">
      <div className="customer">
        <div className="card">
          <div className="card-header">
            <h3>Login Issues - Can't Access Account</h3>
          </div>
          <p className="description">
            Customer is unable to log in to their account. They've tried
            resetting their password multiple times but still...
          </p>
          <div className="card-footer">
            <span className="ticket-id">#1001</span>
            <span className="priority">HIGH PRIORITY</span>
            <span className="name">John Smith</span>
            <span className="date"></span>
          </div>
        </div>
      </div>
      <div className="TaskStatus"></div>
    </div>
  );
};

export default Ticket;
