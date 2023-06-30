import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
import styles from "./ClickToCall.module.css";
import { contact } from "../../data/contact";

export const ClickToCall = () => {
  return (
  <Link className={styles.root} type="tel" href={contact.lines[0].href}>
    <PhoneIcon fontSize="inherit"/>
    Call Us
  </Link>
  );
}