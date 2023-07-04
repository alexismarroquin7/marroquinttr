
import { useState } from "react";

import {
  KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';

import styles from "./ServiceItem.module.css";

export const ServiceItem = ({service, index, count}) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return <div
    className={`${styles.service_item} ${index === 0 && styles.first} ${index === count-1 && styles.last}`}
    onClick={toggleOpen}
  >
    
    <button
      className={`${styles.service_item_summary} ${open ? styles.service_item_summary_open : ""}`}
    >
      {service.name}
      
      <KeyboardArrowDownIcon
        fontSize="inherit"
        className={`${styles.service_item_icon} ${open ? styles.service_item_icon_open : "" }`}
      />
    </button>
    
    <div
      className={`${styles.service_item_list} ${open ? "" : styles.service_item_list_hidden}`}
    >
      {service.sub_list.map(item => {
        return (
          <div
            key={item.id}
            className={styles.service_list_item}
          >
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  </div>

}