
import styles from "./index.module.css";
import { links } from "../../data/links";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className={styles.root}
    >
      {links.map(link => {
        return <Link
          key={link.id}
          href={link.href}
        >
          <p
            className={styles.link}
          >{link.name}</p>
        </Link>
      })}    

      
      <p
        className={styles.bottom_text}
      >
        © 2023 Marroquin Truck & Trailer Repair.<br/>
        All rights reserved.
      </p>
  
    </footer>
  )
}