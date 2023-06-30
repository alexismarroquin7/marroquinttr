
import Link from "next/link";
import { contact } from "../../data/contact";
import styles from "./index.module.css";
import { Section } from "@/components/Section";

export const Contact = () => {
  return <Section
  >
    <h3 className="title_text">{contact.title}</h3>
    <p>{contact.description}</p>

    {contact.lines.map(line => {
      return <div
        key={line.id}
        className={styles.line}
      >
        <div
          className={styles.line_label} 
        >
          {line.icon()}
          <Link
            type={line.type}
            href={line.href}
            target={line.target}
          >
            
            {line.title}
          </Link>
        </div>
      </div>
    })}
    
  </Section>
}