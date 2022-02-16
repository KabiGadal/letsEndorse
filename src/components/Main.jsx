import { useState } from 'react';
import  styles from'./main.module.css';
import { Establishment } from './others/age_of_establishment/Establishment';
import { Experience } from './others/experience/Experience';
import { Primary } from './others/primary_products/Primary';
import { Processed } from './others/processed_products/Processed';
import { Business_Stage } from './others/stageOfBusiness/Business_Stage';

export function Main() {
    const [name, setName] = useState('');
    const [businessIdea, setBusinessIdea] = useState('');
    const [city, setCity] = useState('');

    return <div className={styles.outer_cont}>
        
        {/* Name */}

        <div className={styles.outer}>
            <div className={styles.inner}>
                <h3 className={styles.name}>Name</h3>
            <input className={styles.typeField} type='text' id='typeName' placeholder='name' onChange={(e)=> setName(e.target.value)} />
            </div>
            <p className={styles.showField}>{name}</p>
        </div>

        {/* Business_Idea */}

        <div className={styles.outer}>
            <div className={styles.inner}>
                <h3 className={styles.name}>Business_Idea</h3>
                <input className={styles.typeField} type='text' id='typeName' placeholder='business_idea' onChange={(e) => setBusinessIdea(e.target.value)} />
            </div>
            <p className={styles.showField}>{businessIdea}</p>
        </div>

        {/* City */}
        <div className={styles.outer}>
            <div className={styles.inner}>
                <h3 className={styles.name}>City</h3>
                <input className={styles.typeField} type='text' id='typeName' placeholder='city' onChange={(e) => setCity(e.target.value)} />
            </div>
            <p className={styles.showField}>{city}</p>
        </div>
        <Business_Stage name={name} businessIdea={businessIdea}/>
        <Establishment />
        <Primary />
        <Processed />
        <Experience name={name}/>
    </div>
}