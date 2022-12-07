import { Input } from '@chakra-ui/react';
import styles from '../styles/InputControl.module.css'

function InputControl({ label, ...props }) {
    return (
      <div className={styles.container}>
        {label && <label className={styles.lb}>{label}</label>}
        <Input type="text" {...props} />
      </div>
    );
  }
  
  export default InputControl;