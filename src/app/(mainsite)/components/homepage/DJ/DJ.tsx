"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function DJ(){
return (
 <div className={styles.find}>

    <h2>Need A DJ For Your Event?</h2>

    <h3>Check out Anytime DJ Services, Part of the Anytime family!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' target='_blank' href={`https://anytimedjservices.net`}>Visit Link</Link>
    </div>
 
    <img src='/img/dj.webp' alt='Image of party' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};