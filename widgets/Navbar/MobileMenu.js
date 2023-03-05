import { links } from "../../data/links";
import styles from "./MobileMenu.module.css";
import { useRouter } from "next/router";

export const MobileMenu = ({ open = false, onClose }) => {
  
  const router = useRouter();

  return <div className={`${styles.root} ${open ? styles.open : ""}`}>
    <div className={styles.link_list}>
      {links.map(link => (
        <button
          key={link.id}
          onClick={(e) => {
            router.push(link.href);
            typeof onClose === 'function' && onClose(e);
          }}
        >
          <p>
            {link.name}
          </p>
        </button>
      ))}
    </div>
  </div>
}