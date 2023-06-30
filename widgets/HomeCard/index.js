import { Phone as PhoneIcon } from "@mui/icons-material";
import Link from "next/link";
import { home } from "@/data/home";
import { contact } from "@/data/contact";
import styles from "./index.module.css"
import { Section } from "@/components/Section";
export const HomeCard = () => {
  return (
  <Section
  >
    
    <div style={{background: "grey", width: "100%", height: "270px"}}></div>

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

  </Section>
  )
}