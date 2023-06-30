import styles from "./index.module.css";

export const Button = (props) => {
  
  const {
    flow
  } = props;

  return (
    <button
      {...props}
      className={`${styles.button} ${flow ? styles[flow] : ""}`}
    >
      {props.children}
    </button>
  )
}