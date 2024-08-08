import Link from 'next/link';
import styles from './detailing.module.css';

export default function Detailing(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>All Your Needs Met!</h2>
        <p>At Anytime Roadside Services we’ve got you covered. Whether You’ve got a Flat Tire, A Dead Battery, Ran out of Fuel, Or need a Tow, we’re your go-to to make sure it gets done right!</p>
        <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/needs-met.png" alt="image of a black car" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};