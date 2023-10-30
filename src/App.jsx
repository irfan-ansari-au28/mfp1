import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  const data = [
    { id: 1, name: "ryan" },
    { id: 2, name: "john" },
  ];
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter data={data} />
      </div>
    </>
  );
}

export default App;
