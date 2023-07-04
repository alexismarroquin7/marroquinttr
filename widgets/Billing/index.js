
import { Section } from "@/components/Section";
import { billing } from "../../data/billing";
import styles from "./index.module.css";

export const Billing = () => {
  return <Section
  >

    <div
      className={styles.container}
    >
      <h3 className="title_text">{billing.title}</h3>
      <p>{billing.description}</p>
    </div>
    
    <ul
      className={styles.payment_type_list}
    >
      {billing.payment_types.map(payment_type => {
        return <li 
          key={payment_type.name}
          className={styles.payment_type}
        >
          {payment_type.name}
        </li>
        
      })}
        
      
    </ul>

    <p>{billing.bottom_text}</p>
    
  </Section>
}