import React, { useState } from "react";
import ErrorMoodel from "./Components/UI/ErrorModel";
import AddUser from "./Components/Users/AddUser/AddUser";
import Users from "./Components/Users/UserList/UserList";

function App() {
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);

  const checkUserValidations = (user) => {
    if (user.userName.trim().length == 0) {
      setError({
        title: "Invalid Input",
        message: "Enter UserName",
      });
      return false;
    } else if (+user.age.trim().length == 0) {
      setError({
        title: "Invalid Input",
        message: "Enter Age",
      });
      return false;
    } else if (users.filter((x) => x.userName == user.userName).length > 0) {
      setError({
        title: "Duplicate Entry",
        message: "User Alreay Exists. Kindly Delete & Add it Again.",
      });
      return false;
    }
    return true;
  };

  const onAddUserHandler = (user) => {
    if (checkUserValidations(user) == true) {
      setUsers((prevUsers) => {
        const existingUsers = [...prevUsers];
        existingUsers.unshift({
          id: Math.random().toString(),
          userName: user.userName,
          userAge: user.age,
        });
        return existingUsers;
      });
    }
  };

  const onDeleteHandler = (userId) => {
    setUsers((prevUsers) => {
      const filteredUsers = prevUsers.filter((x) => x.id != userId);
      return filteredUsers;
    });
  };

  const onDisMissErrorModelHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorMoodel
          title={error.title}
          message={error.message}
          onConfirm={onDisMissErrorModelHandler}
        />
      )}
      <AddUser onAddUser={onAddUserHandler} />
      {users.length > 0 && <Users users={users} onDelete={onDeleteHandler} />}
    </div>
  );
}

export default App;
