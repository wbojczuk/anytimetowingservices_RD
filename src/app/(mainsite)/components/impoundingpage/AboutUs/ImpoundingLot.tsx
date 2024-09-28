import Link from 'next/link';
import styles from './aboutus.module.css';

export default function ImpoundingLot(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>Impounding</h2>
        <p>At our impound lot, we prioritize professionalism and transparency. When a vehicle arrives, we take detailed photos from all angles and conduct a thorough walk-around inspection. We also document the loading process, including the use of equipment like skates, ensuring everything is handled with care. Once the vehicle is secured, we provide photo documentation of its placement in either our inside or outside storage, giving you peace of mind that your vehicle is in safe hands.</p>
        <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/impound.png" alt="image of a car impounded" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};