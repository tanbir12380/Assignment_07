import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({
  pCount,
  setPcount,
  resolved,
  setresolved,
  pending,
  setpending,
  rCount,
  setRcount,
  allData,
  setAllData,
  class11,
}) => {
  return (
    <div id="Taskcompletion" className={class11}>
      <div className="status-holder">
        <h2 className="task-header">Task Status</h2>

        {pCount === 0 ? (
          <p className="task-desc">Select a ticket to add to Task Status</p>
        ) : (
          <div className="pending-list">
            {pending.map((data, index) => (
              <div key={index}>
                <h2> {data.title} </h2>
                <button
                  onClick={() => {
                    completeTask(
                      data,
                      pCount,
                      setPcount,
                      resolved,
                      setresolved,
                      pending,
                      setpending,
                      rCount,
                      setRcount,
                      allData,
                      setAllData
                    );
                  }}
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h2 className="resolve-header">Resolved Task</h2>

        {rCount === 0 ? (
          <p className="resolve-desc">No resolved tasks yet.</p>
        ) : (
          <div className="solved-list">
            {resolved.map((data, index) => (
              <div key={index}>
                <h3>{data.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;

function completeTask(
  data,
  pCount,
  setPcount,
  resolved,
  setresolved,
  pending,
  setpending,
  rCount,
  setRcount,
  allData,
  setAllData
) {
  pCount -= 1;
  setPcount(pCount);
  rCount += 1;
  setRcount(rCount);

  resolved.push(data);
  setresolved([...resolved]);

  const remData = allData.filter((Sdata) => Sdata.id !== data.id);

  setAllData(remData);

  const rem1Data = pending.filter((Sdata) => Sdata.id !== data.id);
  setpending(rem1Data);

  toast("Completed");
}
