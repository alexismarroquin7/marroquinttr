import styles from "./ServicesSearchBox.module.css";

export const ServicesSearchBox = ({query = '', dir = 'asc', onChange}) => {
  
  return (
  <div
    className={styles.root}
  >
    <label
      className={styles.search_box}
    >Search for a service (ex. Oil Seal)
      <input 
        placeholder="Search"
        value={query}
        name="query"
        onChange={onChange}
      />
    </label>

    <button
      className={`${styles.select_dir} ${styles[dir]}`}
      name="dir"
      value={dir}
      onClick={(e) => {
        e.preventDefault();
        onChange(e);
      }}
    >
      Sort:{' '}
      {dir === 'asc' && 'A-Z'}
      {dir === 'desc' && 'Z-A'}
    </button>

  </div>
  )
}