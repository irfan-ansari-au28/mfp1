import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { throttle } from "./JS/throttle";
import { Component2 } from "./components/Component2";

function App() {
  // const data = [
  //   { id: 1, name: "ryan" },
  //   { id: 2, name: "john" },
  // ];
  // function logMessage() {
  //   console.log("throttle - Executed");
  // }
  // const onClickHandler = () => {
  //   console.log("btn clicked");
  //   const throttledLogMessage = throttle(logMessage, 5000);
  //   throttledLogMessage();
  // };

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Component2 />
        {/* <button onClick={onClickHandler}>Click me</button> */}
      </div>
    </>
  );
}

export default App;
