import Link from "next/link"
import styles from "./index.module.css";

export const Navbar = () => {
  return (
    <nav
      className={styles.root}
    >
      <Link href="/">
        Company Name
      </Link>
      <button>Menu</button>
    </nav>
  )
}

