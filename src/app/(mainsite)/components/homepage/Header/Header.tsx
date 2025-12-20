"use client"

import Link from 'next/link';
import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>
    {/* <h3><span className="underline underline-top">Mobilized Mechanic Services</span></h3> */}

    <h1>Your Roadside<br /> Services Go-To</h1>

    <h2>We take Cashapp, Venmo, Paypal, Chime, and all major Credit Cards<span className="highlight">!</span></h2>


    <p>Serving all of your roadside needs in Erie, and Niagara New York assistance is only <span className="underline"><strong>one call away!</strong></span></p>

    <div className={`center main-body ${styles.linkWrapper}`}>
    <Link className='main-link' target='_blank' href={`http://public.towbook.com/Kv3p`}>Get Help Now!</Link>
        {/* <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
        <Link className='main-link' href={`sms:${process.env.NEXT_PUBLIC_TEXT_NUM}`}>Text Now</Link> */}
    </div>

    <h4>Serving you 24/7!</h4>
    {/* Hours: <em>Mon-Sun 5am-12am</em> */}

    <img src='/img/header3.jpg' alt='Image of vehicle on towtruck' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.85)"}} className='shader'></div>
 </header>
)};