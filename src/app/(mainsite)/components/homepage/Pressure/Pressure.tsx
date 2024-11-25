"use client"

import Link from 'next/link';
import styles from './pressure.module.css';

export default function Pressure(){
return (
 <div className={styles.find}>

    <h2>We offer car detailing</h2>

    <h3>Anytime Roadside Services and towing now offers car detailing. If you would like to get your car detailed give us a call!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>
 
    <img src='/img/pressure.webp' alt='Image of car' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};