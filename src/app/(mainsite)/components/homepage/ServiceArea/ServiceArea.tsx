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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.2354173150925!2d-80.9399157!3d41.8232286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88318d517b26da01%3A0x6cf28ecc41bbca12!2s3583%20Austin%20Rd%2C%20Geneva%2C%20OH%2044041!5e0!3m2!1sen!2sus!4v1730462631735!5m2!1sen!2sus" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};