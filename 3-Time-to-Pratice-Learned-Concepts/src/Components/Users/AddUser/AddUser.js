import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorMoodel from "../../UI/ErrorModel";
import styles from "./AddUser.module.css";

const AddUser = (props) => {

  const [user, setUser] = useState({
    userName: "",
    age: "",
  });

  const onUserNameHandler = (event) => {
    setUser((prevUser) => {
      return { ...prevUser, userName: event.target.value };
    });
  };

  const onUserAgeHandler = (event) => {
    setUser((prevUser) => {
      return { ...prevUser, age: event.target.value };
    });
  };

  const onSubmitForm = () => {
    props.onAddUser(user);
  };


  return (
      <Card classes={styles.input}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={user.userName}
            onChange={onUserNameHandler}
          />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" value={user.age} onChange={onUserAgeHandler} />
        </div>
        <Button type="button" onClick={onSubmitForm}>
          Add User
        </Button>
      </Card>
  );
};

export default AddUser;
