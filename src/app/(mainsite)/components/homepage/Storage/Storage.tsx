"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function Storage(){
return (
 <div className={styles.find}>

    <h2>We Offer Storage!</h2>

    <h3>We offer Indoor storage for smaller items such as Motorcycles and household items, and outdoor storage for your larger vehicles. Keep your belongings safe with our 24/7 surveillance cameras!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Contact Now</Link>
    </div>
 
    <img src='/img/storage.png' alt='Image of storage boxes' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};