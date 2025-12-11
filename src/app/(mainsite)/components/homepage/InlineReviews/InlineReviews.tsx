"use client"
import styles from "./inlinereviews.module.css"
import Review from "./Reviews/Review";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper/modules"
import Link from "next/link"
import reviewData from "@/app/(mainsite)/data/reviewData"
import LeaveReviewButton from "./LeaveReviewButton/LeaveReviewButton";
import SocialButton from "./SocialsButton/LeaveReviewButton";

export default function InlineReviews() {

    const reviewElems = reviewData.map((data, i)=>{
        return <SwiperSlide className={`${styles.reviewSlider}`} key={i}><Review className={styles.review} {...data}  /></SwiperSlide>
    })
   
  return (
    <section className={styles.inlineReviews}>

        <h1>What People Say<span className="highlight">!</span></h1>

        <div className={styles.reviewsWrapper}>
           
           <Swiper
            slidesPerView={"auto"}
            spaceBetween={40}
            centeredSlides
            initialSlide={2}
            // loopAdditionalSlides={1}
            loop
            autoplay={{delay: 5000}}
            modules={[Autoplay]}
           breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: "auto",
              spaceBetween: 40,
            }
           }}
           >
            {reviewElems}
           </Swiper>
        </div>
        <div className={`center ${styles.cta}`}>
           <a className="main-link" target="_blank" href="https://g.page/r/CYRhJiMGpatxEBM/review">Leave Review</a>
           <a className="main-link" target="_blank" href="https://g.page/r/CYRhJiMGpatxEBM">More Reviews</a>
        </div>
        <img src="/img/contact.webp" aria-hidden className="bg-img" />
        <div className="shader"></div>
    </section>
  )
}
