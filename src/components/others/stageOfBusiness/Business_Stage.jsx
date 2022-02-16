import { useState } from 'react';
import Select from 'react-select';
import styles from './business_stage.module.css';

export function Business_Stage({name,businessIdea}) {
    const business_stage = [
        {
            value: `${name} is looking to Start-up their business of ${businessIdea}.`,
            label: 'Start-up'
        },
        {
            value: `${name} is looking to Scale-up their business of ${businessIdea}.`,
            label: 'Scale-up'
        },
    ];
    const[result,setResult] = useState(business_stage.value)
    const handleChange = (e) => {
        setResult(e.value)
    }


    return <div className={styles.cont}>
        <div className={styles.inner}>
        <h3 className={styles.name}>business_stage</h3>
            <Select className={styles.left} options={business_stage} onChange={handleChange} />
        </div>
        <p className={styles.right}>{ result}</p>
    </div>
}