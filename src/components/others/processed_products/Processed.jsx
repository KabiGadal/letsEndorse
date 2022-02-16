import { useState } from "react";
import styles from './processed.module.css';


export function Processed() {
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);

        for (let i = 0; i < text.length; i++) {
            if (text[i] != ' ' ) {
                setShow(true);
            }
            else {
                setShow(false);
            }
        }
    }
    return <div className={styles.cont}>
        <div className={styles.inner}>
            <h3 className={styles.name}>processed_products</h3>
            <input className={ styles.inp} type='text' placeholder="processed_products" name="processed_products" value={text}
            onChange={handleChange}
            />
        </div>
        <p className={styles.right}>
            {
                show ?`Other products of the enterprise shall include- ${text}`:null
            }
        </p>
        
    </div>
}