import Link from 'next/link';
import styles from './aboutus.module.css';

export default function AboutUs(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>About Us</h2>
        <p>At Anytime Roadside Services, we’re here to help you get back on the road, no matter what the situation. With over 25 years of experience and a five-star Google rating, we’ve built a reputation for reliable and friendly service. Whether you need a tire change, fuel delivery, or a jump start, we’ve got you covered. We've assisted thousands of clients, including motor clubs, car dealers, and individual customers, always with a focus on quick response and excellent customer care.</p>
        <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/aboutus.webp" alt="image of a car on tow truck" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};