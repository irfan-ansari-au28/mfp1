import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    return data;
  };

  const clickHandler = async (e) => {
    try {
      const users = await getUsers();
      setData(users);
      console.log(users, "data"); // Use 'users' instead of 'data' here
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={clickHandler}>Fetch Users</button>
      {data && data.length}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
