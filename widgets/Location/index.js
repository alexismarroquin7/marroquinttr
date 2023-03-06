
import { location } from "../../data/location";
import styles from "./index.module.css";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const Location = () => {
  return <section
    className={styles.root}
  >
    <h3 className="title_text">{location.title}</h3>
    <p>{location.description}</p>
    
    <div className={styles.locations}>
      <div
        className={styles.location_column}
      >
        <LocationOnIcon fontSize="inherit"/>
        <p>Based in:</p>
        <p>Gilroy, CA</p>
      </div>
      
      <div
        className={styles.location_column}
      >
        <LocalShippingIcon fontSize="inherit"/>
        <p>Services Also Available in:</p>
        <ul>
          <li>Bay Area, CA</li>
          <li>Castroville, CA</li>
          <li>Freemont, CA</li>
          <li>San Jose, CA</li>
          <li>Santa Cruz, CA</li>
          <li>Salinas, CA</li>
          <li>Oakland, CA</li>
          <li>Watsonville, CA</li>
        </ul>
      </div>
    </div>

  </section>
}