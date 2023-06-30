import { v4 as uuid } from "uuid";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export const contact = {
  title: "Contact Us",
  description: "If you have any questions about the diesel mechanic services we offer, give us a call.",
  lines: [
    {
      id: uuid(),
      type: 'tel',
      label: 'Primary (call/text)',
      title: '+1(111)111-1111',
      href: 'tel:+1(111)111-1111',
      target: "_self",
      icon: () => <PhoneIcon fontSize="inherit"/>
    },
    {
      id: uuid(),
      type: 'email',
      label: 'Email',
      title: 'marroquinttr@gmail.com',
      href: 'mailto:marroquinttr@gmail.com',
      target: "_blank",
      icon: () => <EmailIcon fontSize="inherit"/>
    }
  ]
}