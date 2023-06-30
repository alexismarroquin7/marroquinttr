
import { Section } from "@/components/Section";
import { location } from "../../data/location";
import styles from "./index.module.css";

export const Location = () => {
  return <Section>
    <h3 className="title_text">{location.title}</h3>
    
    <p>{location.description}</p>
      
    <ul
      className={styles.locations}
    >
      <li>Gilroy, CA</li>
      <li>Castroville, CA</li>
      <li>Freemont, CA</li>
      <li>San Jose, CA</li>
      <li>Santa Cruz, CA</li>
      <li>Salinas, CA</li>
      <li>Oakland, CA</li>
      <li>Watsonville, CA</li>
      <li>Bay Area</li>
    </ul>

  </Section>
}