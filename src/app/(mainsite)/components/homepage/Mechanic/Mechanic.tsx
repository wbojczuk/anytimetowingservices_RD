"use client"

import Link from 'next/link';
import styles from './mechanic.module.css';

export default function Mechanic(){
return (
 <div className={styles.find}>

    <h2>Need A Mechanic?</h2>

    <h3>Anytime Roadside Services offers convenient mechanic services. From brake repairs to oil changes and battery replacements, we handle the work where you are, making car care easy and stress-free. Our reliable service ensures your vehicle gets the attention it needs.</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Contact Us</Link>
    </div>
 
    <img src='/img/mechanic.png' alt='Image of mechanic' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};