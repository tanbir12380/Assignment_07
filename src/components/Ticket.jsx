import React from "react";

const Ticket = () => {
  return (
    <div id="Ticker-container-pro">
      <h2 id="ticket-header">Customer Tickets</h2>

      <div className="Tickets">
        <div className="card">
          <div className="card-header">
            <h3>Login Issues - Can't Access Account</h3>
            <div className="card-badge">
              <img src="Ellipse.png" alt="" />
              Open
            </div>
          </div>
          <p className="description">
            Customer is unable to log in to their account. They've tried
            resetting their password multiple times but still...
          </p>
          <div className="card-footer">
            <span className="ticket-id">#1001</span>
            <span className="priority">HIGH PRIORITY</span>
            <span className="name">John Smith</span>
            <span className="date">
              <img src="cale.png" alt="" /> 1/4/2024
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Login Issues - Can't Access Account</h3>
            <div className="card-badge">
              <img src="Ellipse.png" alt="" />
              Open
            </div>
          </div>
          <p className="description">
            Customer is unable to log in to their account. They've tried
            resetting their password multiple times but still...
          </p>
          <div className="card-footer">
            <span className="ticket-id">#1001</span>
            <span className="priority">HIGH PRIORITY</span>
            <span className="name">John Smith</span>
            <span className="date">
              <img src="cale.png" alt="" /> 1/4/2024
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Login Issues - Can't Access Account</h3>
            <div className="card-badge">
              <img src="Ellipse.png" alt="" />
              Open
            </div>
          </div>
          <p className="description">
            Customer is unable to log in to their account. They've tried
            resetting their password multiple times but still...
          </p>
          <div className="card-footer">
            <span className="ticket-id">#1001</span>
            <span className="priority">HIGH PRIORITY</span>
            <span className="name">John Smith</span>
            <span className="date">
              <img src="cale.png" alt="" /> 1/4/2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
