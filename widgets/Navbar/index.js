import styles from "./index.module.css";
import { MobileMenu } from "./MobileMenu";
import { useToggle } from "../../hooks";
import { Menu as MenuIcon } from "../../icons/Menu";
import { ClickToCall } from "./ClickToCall";

export const Navbar = () => {
  
  const { active, toggle } = useToggle();

  return (
    <>
    
    <nav
      className={styles.root}
    >

      <h4>Marroquin</h4>
      
      <ClickToCall/>

      <MenuIcon
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
        open={active}
      >Menu</MenuIcon>
      
      <MobileMenu 
        open={active}
        onClose={(e) => {
          e.preventDefault();
          toggle();
        }}
      />
      
    </nav>
    <div className={styles.spacer}></div>
    </>
  )
}

