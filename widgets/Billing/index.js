
import { Section } from "@/components/Section";
import { billing } from "../../data/billing";
import styles from "./index.module.css";

export const Billing = () => {
  return <Section
  >
    <h3 className="title_text">{billing.title}</h3>

    <p>{billing.description}</p>
    
    <ul
      className={styles.payment_type_list}
    >
      {billing.payment_types.map(payment_type => {
        return <li 
          key={payment_type.name}
          className={styles.payment_type}
        >
          {payment_type.name}
          {Array.isArray(payment_type.sub_types) && (
            <ul
              className={styles.sub_payment_type_list}
            >
              {payment_type.sub_types.map(sub_type => {
                return <li key={sub_type.name}>{sub_type.name}</li>  
              })}
            </ul>
          )}
        </li>
        
      })}
        
      
    </ul>

    <p>{billing.bottom_text}</p>
    
  </Section>
}