import styles from './gallerycontent.module.css';
import galleryImgs from '@/app/(mainsite)/data/galleryimgs';

export default function GalleryContent(){
    const galleryElems = (galleryImgs.reverse()).map((imgSrc, i)=>{
        return (/youtube/gi.test(imgSrc)) ? <iframe src={imgSrc} key={i} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> : <img src={imgSrc} aria-hidden key={i} className={styles.img} /> ;
    })
return (
 <div className={styles.galleryContent}>
    {galleryElems}
 </div>
)};