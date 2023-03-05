
import { contact } from "../../data/contact";
import styles from "./index.module.css";

export const Contact = () => {
  return <section
    className={styles.root}
  >
    <h3>{contact.title}</h3>
    <p>{contact.description}</p>
    
  </section>
}