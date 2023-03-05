
import { about } from "../../data/about";
import styles from "./index.module.css";

export const About = () => {
  return <section
    className={styles.root}
  >
    <h3>{about.title}</h3>
    <p>{about.description}</p>
    
  </section>
}