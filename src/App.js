import { useState, useEffect } from "react";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState();

  useEffect(async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await result.json();

    setUsers(response);
  }, []);

  const handleSelectUser = (userId) => {
    console.log("User selected: ", userId);
  };

  return (
    <div>
      {users.map((user, index) => (
        <User {...user} />
      ))}
    </div>
  );
};

export default App;
