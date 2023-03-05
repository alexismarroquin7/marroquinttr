
import { services } from "../../data/services";
import styles from "./index.module.css";

export const Services = () => {
  return <section
    className={styles.root}
  >
    <h3>{services.title}</h3>
    <p>{services.description}</p>
    
    <div
      className={styles.services_list}
    >
      <label
        className={styles.search_box}
      >Search for a service (ex. Oil Seal)
        <input 
          placeholder="Search"
        />
      </label>
      
      {services.list.map(item => {
        return <div
          key={item.id}
        >
          <p
            style={{fontWeight: "bold"}}
          >• {item.name}</p>
        </div>
      })}
    </div>
  </section>
}