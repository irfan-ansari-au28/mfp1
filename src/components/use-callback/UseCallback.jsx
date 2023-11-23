/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import React, { useCallback, useState } from "react";

/* eslint-disable react/jsx-key */
const data = [
  {
    id: 1,
    name: "John Doe",
    username: "john_doe",
    email: "john@example.com",
  },
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
];

const List = React.memo(({ users, removedUsers }) => {
  console.log("List Mounts");
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} <span onClick={() => removedUsers(user.id)}>X</span>
        </p>
      ))}
    </div>
  );
});

const App = () => {
  const [users, setUsers] = useState(data);
  const [text, setText] = useState("");
  console.log("App Mounts");

  const removeUser = useCallback(
    (id) => {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    },
    [users]
  );
  return (
    <div>
      <h1>Use callback hook implementation</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <List users={users} removeUser={removeUser}></List>
    </div>
  );
};

export default App;
