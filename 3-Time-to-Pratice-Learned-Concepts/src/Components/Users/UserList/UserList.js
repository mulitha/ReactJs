import Card from "../../UI/Card";
import User from "../User/User";
import styles from "./UserList.module.css";

const Users = (props) => {
  return (
    <Card classes={styles.users}>
      <ul >
        {props.users.map((x) => (
          <User userName={x.userName} userAge={x.userAge} id={x.id}  onDelete={props.onDelete}/>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
