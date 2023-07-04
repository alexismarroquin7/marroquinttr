import styles from "./index.module.css";

export const Grid = ({children, ...rest}) => {
  return <div
    className={`${styles.grid}`}
    {...rest}
  >
    {children}
  </div>
}