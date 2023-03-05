import { home } from "../../data/home";
import styles from "./index.module.css"
export const HomeCard = () => {
  return (
  <div
    className={styles.root}
  >
    <h2>
      Marroquin Truck & Trailer Repair
    </h2>
    
    <div style={{background: "grey", width: "100%", height: "300px"}}></div>

    <div
      className={styles.card}
    >
      <h3>{home.title}</h3>

      <p>{home.description}</p>
      
      <button>CALL NOW</button>
      <button>VIEW SERVICES</button>
    </div>
  </div>
  )
}