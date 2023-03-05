import styles from "./index.module.css";

export const Menu = ({ width = "2rem", open = false, onClick }) => {
  return (
  <button
    className={styles.root}
    onClick={onClick}
  >
    <svg
      width={width}
      height={width}
      viewBox={"0 0 100 100"}
    >
      <path 
        className={`${styles.path_a} ${open ? styles.open : "" }`}
      />
      <path 
        className={`${styles.path_b} ${open ? styles.open : "" }`}
      />
      <path 
        className={`${styles.path_c} ${open ? styles.open : "" }`}
      />
    </svg>
  </button>
  )
}