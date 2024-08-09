"use client"

import Link from 'next/link';
import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>
    <h1>Your Roadside<br /> Services Go-To</h1>

    <p>Serving all of your roadside needs in Geneva Ohio and surrounding areas, assistance is only <span className="underline"><strong>one call away!</strong></span></p>

    <div className={`center main-body ${styles.linkWrapper}`}>
        <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>

    <img src='/img/header-bg.webp' alt='Image of ' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.71)"}} className='shader'></div>
 </header>
)};