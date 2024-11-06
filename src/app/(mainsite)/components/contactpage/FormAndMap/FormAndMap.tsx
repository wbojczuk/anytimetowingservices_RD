import styles from './formandmap.module.css';
import FreeEstimateForm from '../FreeEstimateForm/FreeEstimateForm';

export default function FormAndMap(){
return (
 <div className={styles.formAndMap}>
    <div className={styles.formWrapper}>
        <FreeEstimateForm />
    </div>

    <div className={styles.mapWrapper}>
        <div className={styles.menuCover} >
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d672.7993897682142!2d-80.9351653!3d41.8095585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88318c31d18a2ea7%3A0xecffc86608472481!2s745%20E%20Main%20St%20%232%2C%20Geneva%2C%20OH%2044041!5e1!3m2!1sen!2sus!4v1730932612701!5m2!1sen!2sus" width="600" height="450" style={{border: 0}}  loading="lazy" ></iframe>
        </div>
    </div>
 </div>
)};