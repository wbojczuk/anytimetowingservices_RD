"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function Find(){
return (
 <div className={styles.find}>

    <h2>Is Your Vehicle Impounded?</h2>

    <h3>Let us help! We’ve got experience recovering vehicles from impoundment so you can get back on the road faster!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>
 
    <img src='/img/police.png' alt='Image of police lights' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};