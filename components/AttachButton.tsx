import { Paperclip } from 'lucide-react';
import styles from './AttachButton.module.css';

export default function AttachButton() {
  return (
    <button className={styles.button}>
      <div className={styles.hoverBg} />
      <Paperclip size={18} className={styles.icon} />
      <span className={styles.text}>Attach File</span>
    </button>
  );
}
