import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setData(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={getUsers}>Fetch Users</button>
      {data && data.length}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
