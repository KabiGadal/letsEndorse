import { useState } from "react";
import styles from './experience.module.css';


export function Experience({name}) {
    const [text, setText] = useState(0);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
            setShow(true);
    }

    return <div className={styles.cont}>
        <div className={styles.inner}>
            <h3 className={styles.name}>relevant_experience</h3>
            <div className={styles.left}>
                <input type='number' className={styles.inp} onChange={handleChange} min={1} placeholder="relevant_experience" name='relevant_experience'/>
                </div>
        </div>  
        {
            show ?
                <p className={styles.right}>{name} has relevant experience of {text} years in this field.</p>
                : <p className={styles.right}></p>
        } 
    </div>
}