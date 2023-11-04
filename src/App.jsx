import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useLocalstorage from "./components/custom-hooks/useLocalstorage";
// import { throttle } from "./JS/throttle";

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

function App() {
  const [name, setName] = useLocalstorage("name", "irfan");
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <Component2 /> */}
        {/* <button onClick={onClickHandler}>Click me</button> */}
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default App;
