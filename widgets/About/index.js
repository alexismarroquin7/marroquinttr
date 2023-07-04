
import { Section } from "@/components/Section";
import { about } from "../../data/about";
import styles from "./index.module.css";

export const About = () => {
  return <Section>
    <div
      className={styles.container}
    >
      <h3 className="title_text">{about.title}</h3>
      
      {about.description.split('\n').map((p, i) => {
        return (
          <p key={i}>{p}</p>
        )
      })}
      
    </div>
  </Section>
}