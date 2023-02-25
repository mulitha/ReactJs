import styles from "./User.module.css";

const User = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className={styles.user} key={props.id} onClick={onDeleteHandler}>
      {props.userName} ({props.userAge} years old)
    </li>
  );
};

export default User;
