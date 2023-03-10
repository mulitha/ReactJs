import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

//#region-One way of doing. Using Refs (uncontrol components)

const AddUser = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const userNameTemp = userNameRef.current.value;
    const userAgeTemp = userAgeRef.current.value;

    if (userNameTemp.trim().length === 0 || userAgeTemp.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userAgeTemp < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(userNameTemp, userAgeTemp);

    userNameRef.current.value = "";
    userAgeRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={userNameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={userAgeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

//#endregion-One way of doing. Using Refs (uncontrol components)






//#region-Another way of doing. Using useState hook

// const AddUser = (props) => {
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");

//   const [error, setError] = useState();

//   const addUserHandler = (event) => {
//     event.preventDefault();
//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         title: "Invalid input",
//         message: "Please enter a valid name and age (non-empty values).",
//       });
//       return;
//     }
//     if (+enteredAge < 1) {
//       setError({
//         title: "Invalid age",
//         message: "Please enter a valid age (> 0).",
//       });
//       return;
//     }
//     props.onAddUser(enteredUsername, enteredAge);

//     setEnteredUsername("");
//     setEnteredAge("");
//   };

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//     <Wrapper>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onConfirm={errorHandler}
//         />
//       )}
//       <Card className={classes.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">Username</label>
//           <input
//             id="username"
//             type="text"
//             value={enteredUsername}
//             onChange={usernameChangeHandler}
//           />
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             id="age"
//             type="number"
//             value={enteredAge}
//             onChange={ageChangeHandler}
//           />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </Wrapper>
//   );
// };

//#endregion-Another way of doing. Using useState hook

export default AddUser;
