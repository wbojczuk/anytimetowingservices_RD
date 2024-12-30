"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function Storage(){
return (
 <div className={styles.find}>

    <h2>We Offer Storage!</h2>

    <h3>Looking for secure storage in Geneva, Ohio? I offer 1,700 square feet of indoor storage space, perfect for ATVs, motorcycles, and a few vehicles. Your items will be kept safe and protected from the elements in a clean, secure environment. Whether you need short-term or long-term storage, I’ve got you covered with a space designed for your peace of mind.</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Contact Now</Link>
    </div>
 
    <img src='/img/storage.png' alt='Image of storage boxes' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};