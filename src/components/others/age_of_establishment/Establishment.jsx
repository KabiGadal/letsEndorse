import { useState } from "react";
import styles from './establishment.module.css';

export function Establishment() {
    const [field, setField] = useState(0);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setField(e.target.value);
        setShow(true);
    }
    return <div className={styles.cont}>
        <div className={styles.inner}>
            <h3 className={styles.name}>age_of_establishment</h3>
            <input className={styles.left} type='number' name='age_of_establishment' placeholder="age_of_establishment" min={0} max={100} onChange={handleChange} />
        </div>
        {
            show ?
        
                <p className={styles.right}>
                    {field == 0 ? 'This enterprise is yet to start-up.' : `This enterprise has been operational since ${field} years and has been serving its customers since then.`
                    }
                </p> : <p className={styles.right}></p>
        }
    </div>
}