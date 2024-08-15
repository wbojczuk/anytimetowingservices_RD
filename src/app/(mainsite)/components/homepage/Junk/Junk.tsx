"use client"

import Link from 'next/link';
import styles from './junk.module.css';

export default function Junk(){
return (
 <div className={styles.find}>

    <h2>We buy Junk Vehicles</h2>

    <h3>We pay top dollar and can get cash in your hands for that vehicle that has been sitting around!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>
 
    <img src='/img/junk.webp' alt='Image of police lights' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};