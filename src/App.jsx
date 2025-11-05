import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Mainbody from "./components/Mainbody";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";

function App() {
  const [allData, setAllData] = useState([]);
  const [pending, setpending] = useState([]);
  const [resolved, setresolved] = useState([]);
  const [pCount, setPcount] = useState(0);
  const [rCount, setRcount] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <>
      <Nav></Nav>
      <Suspense>
        <Mainbody
          pending={pending}
          setpending={setpending}
          resolved={resolved}
          setresolved={setresolved}
          allData={allData}
          setAllData={setAllData}
          pCount={pCount}
          setPcount={setPcount}
          rCount={rCount}
          setRcount={setRcount}
        ></Mainbody>
      </Suspense>
      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
