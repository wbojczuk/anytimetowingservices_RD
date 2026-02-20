"use client"

import Link from 'next/link';
import styles from './header.module.css';
import InfiniteRibbon from '../InfiniteRibbon2/InfiniteRibbon';

export default function Header(){
return (
 <header className={styles.header}>
    <h3><span>Fully insured for your protection!</span></h3>

    <div className="center">
        <InfiniteRibbon content={<><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span><span> We do light service lockout fuel delivery jump starts and flat tire changes!</span></>} />
    </div>

    <h1>Your Roadside<br /> Services Go-To</h1>

    <h2>We take Cashapp, Venmo, Paypal, Chime, and all major Credit Cards<span className="highlight">!</span></h2>


    <p>Serving all of your roadside needs in Erie, and Niagara New York assistance is only <span className="underline"><strong>one call away!</strong></span></p>

    <div className={`center main-body ${styles.linkWrapper}`}>
    <Link className='main-link' target='_blank' href={`http://public.towbook.com/Kv3p`}>Get Help Now!</Link>
        {/* <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
        <Link className='main-link' href={`sms:${process.env.NEXT_PUBLIC_TEXT_NUM}`}>Text Now</Link> */}
    </div>

    <h4><em>Hours: Mon-Fri 6pm-7am, Sat-Sun 24hrs</em></h4>
    {/* Hours: Mon-Sun 5am-12am */}
    {/* 24 hours a day, 7 days a week! */}

    <img src='/img/header4.jpg' alt='Image of vehicle on towtruck' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.85)"}} className='shader'></div>
 </header>
)};