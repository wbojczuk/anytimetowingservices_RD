"use client"
import Link from 'next/link';
import gsap from 'gsap';
import styles from './callandchat.module.css';
import { useEffect, useRef } from 'react';

export default function CallAndChat(){

    const wrapperRef: any = useRef()

    useEffect(()=>{
        gsap.to(wrapperRef.current,{
            transform: "translateY(0)",
            ease: "bounce.out",
            duration: 1
        })
    }, [])

return (
 <div ref={wrapperRef} className={styles.callAndChat}>
    <a href={"tel:" + process.env.NEXT_PUBLIC_PHONE_NUM} target="_blank">
        <img src="/img/call.webp" aria-hidden />
    </a>
    <Link href={"sms:" + process.env.NEXT_PUBLIC_TEXT_NUM}>
        <img src="/img/chat.webp" aria-hidden />
    </Link>

 </div>
)};