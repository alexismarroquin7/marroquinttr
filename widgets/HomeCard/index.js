
import Link from "next/link";
import Image from "next/image";

import { Section } from "@/components/Section";

import { Phone as PhoneIcon } from "@mui/icons-material";

import { home } from "@/data/home";
import { contact } from "@/data/contact";

import styles from "./index.module.css"

export const HomeCard = () => {
  return (
  <Section>
    
    <div 
      style={{
        width: "100%",
        height: home.image.height,
        position: "relative",
        boxShadow: "var(--box-shadow-primary)",
        borderRadius: "var(--border-radius-primary)",
        overflow: "hidden"
      }}
    >
      <Image
        fill
        objectFit="cover"
        objectPosition="center"
        title={home.image.title}
        alt={home.image.alt}
        src={home.image.src}
      />  
    </div>

    <div
      className={styles.container}
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

    
  </Section>
  )
}