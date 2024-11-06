import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
    <div className={styles.textWrapper}>
        <h2>
            <span className="underline">Serving a 60-mile</span> <br />
            <span className="underline">Radius From</span> <br />
            <span className="underline">Geneva, OH</span>
        </h2>
        <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d672.7993897682142!2d-80.9351653!3d41.8095585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88318c31d18a2ea7%3A0xecffc86608472481!2s745%20E%20Main%20St%20%232%2C%20Geneva%2C%20OH%2044041!5e1!3m2!1sen!2sus!4v1730932612701!5m2!1sen!2sus" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};