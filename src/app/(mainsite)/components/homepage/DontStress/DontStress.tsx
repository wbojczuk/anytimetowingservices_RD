"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function DontStress(){
return (
 <div className={styles.find}>

    <h2>Don’t Stress About It</h2>

    <h3>Let us handle your situation. We’re professionals and will get you back to normal as soon as possible!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>
 
    <img src='/img/dontstress.webp' alt='Image of road' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};