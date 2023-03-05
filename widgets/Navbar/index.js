import Link from "next/link"
import styles from "./index.module.css";
import { MobileMenu } from "./MobileMenu";
import { useToggle } from "../../hooks";
import { Menu as MenuIcon } from "../../icons/Menu";

export const Navbar = () => {
  
  const { active, toggle } = useToggle();

  return (
    <nav
      className={styles.root}
    >

      <Link href="/">
        Marroquin
      </Link>
      
      <MenuIcon
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
        open={active}
      >Menu</MenuIcon>
      
      <MobileMenu open={active}/>
    
    </nav>
  )
}

