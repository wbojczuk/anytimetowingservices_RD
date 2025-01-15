import styles from './ad.module.css';

export default function Ad(){
return (
 <div className={styles.ad}>
       <div className="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/x10NSOoWQp8?si=QligjkONmRfGDjRK&amp;controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       </div>
 </div>
)};