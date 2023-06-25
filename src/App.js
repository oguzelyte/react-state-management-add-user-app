import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import UserList from "./UserList";
import { useState } from "react";

const App = () => {
  let navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const createUser = (user) => {
    if (users.filter((e) => e.username === user.username).length > 0) {
      alert(`${user.username} already exists. Please choose another one`);
      return;
    }
    setUsers(
      users.concat({
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        gamesplayed: 0,
      })
    );
    navigate("/");
  };
  return (
    <Routes>
      <Route exact path="/" element={<UserList users={users} />} />
      <Route
        exact
        path="/create"
        element={
          <AddUser
            onCreateUser={(user) => {
              createUser(user);
            }}
          />
        }
      />
    </Routes>
  );
};

export default App;
