import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import UserList from "./pages/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((er) => console.log("Error:", er));
  }, []);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>
      <div>
        <UserList users={users} />
      </div>
      <button onClick={handleIncrement}>Increment {count}</button>
    </div>
  );
};
export default App;
