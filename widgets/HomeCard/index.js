import { Phone as PhoneIcon } from "@mui/icons-material";
import Link from "next/link";
import { home } from "@/data/home";
import { contact } from "@/data/contact";
import styles from "./index.module.css"
export const HomeCard = () => {
  return (
  <div
    className={styles.root}
  >
    
    <div style={{background: "grey", width: "100%", height: "360px"}}></div>

    <div
      className={styles.card}
    >
      <h3
        className="title_text"
      >{home.title}</h3>

      <p>{home.description}</p>
      
      <div
        className={styles.card_actions}
      >

        <Link
          href={contact.lines[0].href}
          className={`${styles.card_action} ${styles.card_action_primary}`}
        >
          <PhoneIcon fontSize="inherit"/>
          {home.button1.text}
        </Link>

        <button
          className={`${styles.card_action} ${styles.card_action_secondary}`}
        >{home.button2.text}</button>
      </div>
    </div>

  </div>
  )
}