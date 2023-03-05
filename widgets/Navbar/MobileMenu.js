import Link from "next/link";
import { links } from "../../data/links";
import styles from "./MobileMenu.module.css";

export const MobileMenu = ({open = false}) => {
  return <div className={`${styles.root} ${open ? styles.open : ""}`}>
    <div className={styles.link_list}>
      {links.map(link => (
        <Link
          key={link.id}
          href={link.href}
        >
          <p>
            {link.name}
          </p>
        </Link>
      ))}
    </div>
  </div>
}