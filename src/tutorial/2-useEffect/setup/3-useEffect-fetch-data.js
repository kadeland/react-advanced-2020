import React from "react";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users)
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>github users</h3>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        );
      })}
    </div>
  );
};
export default UseEffectSecondArgument;
