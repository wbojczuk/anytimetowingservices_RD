"use client"

import Link from 'next/link';
import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>

    <h2><span className="underline">Mobile Mechanic Services Available!</span></h2>

    <h1>Your Roadside<br /> Services Go-To</h1>

    <p>Serving all of your roadside needs in Geneva Ohio and surrounding areas, assistance is only <span className="underline"><strong>one call away!</strong></span></p>

    <div className={`center main-body ${styles.linkWrapper}`}>
        <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>

    <h4>Hours: <em>Mon-Sun 6am-11pm</em></h4>

    <img src='/img/header-bg.png' alt='Image of vehicle on towtruck' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.71)"}} className='shader'></div>
 </header>
)};