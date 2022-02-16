import { useState } from "react";
import Select from 'react-select';
import styles from './primary.module.css';

export function Primary() {
    const [name, setName] = useState('');

    const offered_to = [
        {
            value: `This establishment offers products/services like- ${name} to End customers.`,
            label: 'End customers'
        },
        {
            value: `This establishment offers products/services like-${name} to Wholesalers.`,
            label: 'Wholesalers'
        },
        {
            value: `This establishment offers products/services like-${name} to Distributors.`,
            label: 'Distributors'
        },
        {
            value: `This establishment offers products/services like-${name} to Retailers.`,
            label: 'Retailers'
        },
    ];

    const [sentence, setSentence] = useState(offered_to.value);
    const changeHandler = (e) => {
        setSentence(e.value)
    }
   

    return <div className={styles.cont}>
        <div className={styles.inner}>
            <h3 className={styles.name}>primary_product_service_offered</h3>
        <div className={styles.left}>
        <input className={styles.inp} type='textbox' name="primary_product_service_offered" value={name}
                    onChange={(e) => setName(e.target.value)} placeholder='primary_product_service_offered'
                />
          
                <h3 className={styles.name}>offered_to</h3>
            <Select className={ styles.select}options={offered_to} onChange={changeHandler}/>
            </div>
           
        </div>
            <p className={styles.right}>{sentence}</p>
    </div>
}