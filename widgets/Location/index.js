
import { location } from "../../data/location";
import styles from "./index.module.css";

export const Location = () => {
  return <section
    className={styles.root}
  >
    <h3>{location.title}</h3>
    <p>{location.description}</p>
    
  </section>
}