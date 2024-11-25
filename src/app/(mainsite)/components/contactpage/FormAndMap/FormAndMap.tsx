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
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43068.022619669886!2d-80.98706501530873!3d41.796373039937706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88318c3b6f8b0c35%3A0xfc95ad827838f44e!2sGeneva%2C%20OH%2044041!5e1!3m2!1sen!2sus!4v1732573774958!5m2!1sen!2sus" width="600" height="450" style={{border: 0}}  loading="lazy" ></iframe>
        </div>
    </div>
 </div>
)};