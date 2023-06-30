import styles from "./index.module.css";

export const Section = ({
  children
}) => {
  return <div
    className={styles.section}
  >
    {children}
  </div>
}