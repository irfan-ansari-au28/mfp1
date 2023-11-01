import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component1 from "./components/Component1";

function App() {
  // const data = [
  //   { id: 1, name: "ryan" },
  //   { id: 2, name: "john" },
  // ];

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Component1 />
      </div>
    </>
  );
}

export default App;
