import { useState, useMemo } from "react";

const users = [
  { id: 1, name: "John Doe", username: "john_doe", email: "john@example.com" },
  {
    id: 2,
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Bob Johnson",
    username: "bob_johnson",
    email: "bob@example.com",
  },
  {
    id: 4,
    name: "Alice Brown",
    username: "alice_brown",
    email: "alice@example.com",
  },
  {
    id: 5,
    name: "Charlie Davis",
    username: "charlie_davis",
    email: "charlie@example.com",
  },
  { id: 6, name: "Eva White", username: "eva_white", email: "eva@example.com" },
  {
    id: 7,
    name: "Frank Black",
    username: "frank_black",
    email: "frank@example.com",
  },
  {
    id: 8,
    name: "Grace Miller",
    username: "grace_miller",
    email: "grace@example.com",
  },
  {
    id: 9,
    name: "David Wilson",
    username: "david_wilson",
    email: "david@example.com",
  },
  {
    id: 10,
    name: "Sophia Lee",
    username: "sophia_lee",
    email: "sophia@example.com",
  },
];

const App = () => {
  console.log("app mounts");
  const [searchTerm, setSearchTerm] = useState("");
  const [text, setText] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("filteredUsers recalculating...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div>
      <h1>Use Memo hook</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => setSearchTerm(text)}>Search</button>
        <p>{searchTerm}</p>
      </div>
      <div>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
