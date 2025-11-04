import React from "react";

const TaskStatus = () => {
  return (
    <div>
      <div>
        <h2 className="task-header">Task Status</h2>
        <p className="task-desc">Select a ticket to add to Task Status</p>
      </div>
      <div>
        <h2 className="resolve-header">Resolved Task</h2>
        <p className="resolve-desc">No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default TaskStatus;
