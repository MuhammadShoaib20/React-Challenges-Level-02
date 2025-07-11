import React, { useEffect, useState } from "react";
import "./App.css";

const FetchUserData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>User-List</h1>
      <ul>
        {user.map((users) => (
          <li key={users.id} className={"List-Color"}>
            {users.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FetchUserData;
