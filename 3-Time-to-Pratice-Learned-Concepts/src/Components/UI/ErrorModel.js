import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModel.module.css";

const ErrorMoodel = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <Card classes={styles.modal}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <div className={styles.actions}>
          <Button type="button" onClick={props.onConfirm}>
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorMoodel;
