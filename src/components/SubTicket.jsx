import "./Our.css";
import { toast } from "react-toastify";

const SubTic = ({
  allDatas,
  allData,
  setAllData,
  pending,
  setpending,
  pCount,
  setPcount,
}) => {
  return (
    <div
      onClick={() => {
        addTicketToTask(
          allDatas,
          allData,
          setAllData,
          pending,
          setpending,
          pCount,
          setPcount
        );
      }}
      className={"card " + classDecider3(allData.priority)}
    >
      <div className="card-header">
        <h3>{allData.title}</h3>
        <div className={"card-badge " + classDecider(allData.status)}>
          <div className={classDecider1(allData.status)}></div>
          {allData.status}
        </div>
      </div>
      <p className="description">{allData.description}</p>
      <div className="card-footer">
        <span className="ticket-id">{allData.id}</span>
        <span
          style={{ marginRight: "10%" }}
          className={"priority " + classDecider2(allData.priority)}
        >
          {allData.priority}
        </span>
        <span style={{ marginLeft: "10%" }} className="name">
          {allData.customer}
        </span>
        <span className="date">
          <img src="cale.png" alt="" /> {allData.createdAt}
        </span>
      </div>
    </div>
  );
};

export default SubTic;

function classDecider(classname) {
  if (classname === "Open") {
    return "greenish";
  } else if (classname === "In-Progress") {
    return "yellowish";
  }
}

function classDecider1(classname) {
  if (classname === "Open") {
    return "greenish1";
  } else if (classname === "In-Progress") {
    return "yellowish1";
  }
}

function classDecider2(classname) {
  if (classname === "LOW PRIORITY") {
    return "greenish2";
  } else if (classname === "MEDIUM PRIORITY") {
    return "yellowish2";
  } else {
    return "redish2";
  }
}

function classDecider3(classname) {
  if (classname === "LOW PRIORITY") {
    return "greenCard";
  } else if (classname === "MEDIUM PRIORITY") {
    return "yellowCard";
  } else {
    return "redishCard";
  }
}

function addTicketToTask(
  allDatas,
  allData,
  setAllData,
  pending,
  setpending,
  pCount,
  setPcount
) {
  if (pending.includes(allData) === false) {
    pending.push(allData);
    setpending([...pending]);
    pCount += 1;
    setPcount(pCount);
    toast("Ticket is in progress");
  } else {
    toast("This ticket is already added in progress");
  }
}
