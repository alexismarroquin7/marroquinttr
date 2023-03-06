
import { about } from "../../data/about";
import styles from "./index.module.css";

export const About = () => {
  return <section
    className={styles.root}
  >
    <h3 className="title_text">{about.title}</h3>
    <div
      className={styles.description}
    >
      {about.description.split('\n').map(p => {
        return (
          <p key={p}>{p}</p>
        )
      })}
    </div>
  </section>
}