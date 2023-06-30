import { links } from "../../data/links";
import styles from "./MobileMenu.module.css";
import { useRouter } from "next/router";
import {KeyboardArrowRight as KeyboardArrowRightIcon} from '@mui/icons-material';

export const MobileMenu = ({ open = false, onClose }) => {
  
  const router = useRouter();

  return <div className={`glass ${styles.root} ${open ? styles.open : ""}`}>
    <div className={styles.link_list}>
      {links.map(link => (
        <button
          key={link.id}
          onClick={(e) => {
            router.push(link.href);
            typeof onClose === 'function' && onClose(e);
          }}
          className={styles.link_item}
        >
          {link.name}
          <KeyboardArrowRightIcon fontSize="inherit"/>
        </button>
      ))}
    </div>
  </div>
}