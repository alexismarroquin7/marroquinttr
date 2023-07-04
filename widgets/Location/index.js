
import { Section } from "@/components/Section";
import { location } from "../../data/location";

import { LocationOn as LocationOnIcon } from "@mui/icons-material";

import styles from "./index.module.css";

export const Location = () => {
  return <Section>
    <div
      className={styles.container}
    >
      <h3 className="title_text">{location.title}</h3>
      <p>{location.description}</p>
    </div>
      
    <ul
      className={styles.locations}
    >
      <li>
        <LocationOnIcon fontSize="inherit"/>
        Gilroy, CA
      </li>
      <li>
        <LocationOnIcon fontSize="inherit"/>
        Castroville, CA
      </li>
      <li>
        <LocationOnIcon fontSize="inherit"/>
        Freemont, CA
      </li>
      <li>
        <LocationOnIcon fontSize="inherit"/>
        San Jose, CA
      </li>
      <li>
        <LocationOnIcon fontSize="inherit"/>
        Santa Cruz, CA
      </li>
      <li>
        <LocationOnIcon fontSize="inherit"/>
        Salinas, CA
      </li>
      <li>
        <LocationOnIcon fontSize="inherit"/>
        Oakland, CA
      </li>
      <li>
        <LocationOnIcon fontSize="inherit"/>
        Watsonville, CA
      </li>
      <li>
        <LocationOnIcon fontSize="inherit"/>
        Bay Area
      </li>
    </ul>

  </Section>
}