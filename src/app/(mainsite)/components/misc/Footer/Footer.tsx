"use client"

import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/profile.php?id=6156" target="_blank" className={styles.socialLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"></path></svg>
          </a>
          <a href="https://www.instagram.com/anytimeroadsideservices/" target="_blank" className={styles.socialLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.61 12.243a1.6 1.6 0 1 1-1.56-1.63a1.62 1.62 0 0 1 1.56 1.63"></path><path fill="currentColor" d="M14.763 7.233H9.338a2.024 2.024 0 0 0-2.024 2.024v5.547a2.024 2.024 0 0 0 2.024 2.024h5.425a2.024 2.024 0 0 0 2.024-2.024V9.267a2.026 2.026 0 0 0-2.024-2.034m-2.713 7.723a2.703 2.703 0 1 1 2.642-2.703a2.67 2.67 0 0 1-2.642 2.703m2.936-5.405a.496.496 0 0 1-.496-.506a.506.506 0 1 1 1.012 0a.496.496 0 0 1-.557.506z"></path><path fill="currentColor" d="M12.05 2a10 10 0 1 0-.1 20a10 10 0 0 0 .1-20m6.073 12.702a3.39 3.39 0 0 1-3.41 3.411H9.389a3.39 3.39 0 0 1-3.411-3.41V9.378a3.39 3.39 0 0 1 3.41-3.411h5.325a3.39 3.39 0 0 1 3.41 3.41z"></path></svg>
          </a>
          <a href="https://www.tiktok.com/@anytime.roadside" target="_blank" className={styles.socialLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.939 7.713v.646a.37.37 0 0 1-.38.37a5.36 5.36 0 0 1-2.903-1.108v4.728a3.94 3.94 0 0 1-1.18 2.81a4 4 0 0 1-2.87 1.17a4.1 4.1 0 0 1-2.862-1.17a3.98 3.98 0 0 1-1.026-3.805c.159-.642.48-1.232.933-1.713a3.58 3.58 0 0 1 2.79-1.313h.82v1.703a.348.348 0 0 1-.39.348a1.918 1.918 0 0 0-1.23 3.631c.27.155.572.246.882.267c.24.01.48-.02.708-.092a1.93 1.93 0 0 0 1.313-1.816V5.754a.36.36 0 0 1 .359-.36h1.415a.36.36 0 0 1 .359.34a3.3 3.3 0 0 0 1.282 2.245a3.25 3.25 0 0 0 1.641.636a.37.37 0 0 1 .338.35z"></path></svg>
          </a>
          <a href="https://www.pinterest.com/anytimeroadsideservices/" target="_blank" className={styles.socialLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/shane-wheaton-52730b338/" target="_blank" className={styles.socialLink}>
          <svg className={styles.smallSvg} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"></path></svg>
          </a>
          <a href="https://youtube.com/@shanewheaton-f3r" target="_blank" className={styles.socialLink}>
          <svg className={styles.smallSvg} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9"></path></svg>
          </a>
          
        </div>
      <div className={styles.content}>

        <img src="/img/logo.jpg" width={512} height={512} className={styles.logo} alt="Main Logo"/>

        <div className={styles.links}>
          <aside>
              <h3 className={styles.listTitle}>Quick Links</h3>
              <ul className={styles.list}>
                
                <li className={styles.listItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/contact">Contact</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>

              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Categories</h3>
              <ul className={styles.list}>

                <span className={styles.listItem}>Road Assistance</span>
                <span className={styles.listItem}>Roadside Service</span>
                <span className={styles.listItem}>Road Service</span>
              
              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Contact</h3>
              <ul className={styles.list}>

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
                  <a href={"tel:" + process.env.NEXT_PUBLIC_PHONE_NUM} target="_blank">{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
                </aside>

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm4-8h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z"></path></svg>
                  <a href={"sms:" + process.env.NEXT_PUBLIC_TEXT_NUM} target="_blank">TEXTING: {process.env.NEXT_PUBLIC_TEXT_NUM_FORMATTED}</a>
                </aside>
                

                {/* <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394zM628 630H400V394h228z"></path></svg>
                  <a>DOT: 4172277</a>
                </aside>

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394zM628 630H400V394h228z"></path></svg>
                  <a>PUCO: 655994</a>
                </aside> */}

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 20V4h10v5h1q1.25 0 2.125.875T22 12v8zm-3.5 1q1.05 0 1.775-.725T7 18.5v-8q0-1.05-.725-1.775T4.5 8t-1.775.725T2 10.5v8q0 1.05.725 1.775T4.5 21M10 9h6V6h-6zm6 5q.425 0 .713-.288T17 13t-.288-.712T16 12t-.712.288T15 13t.288.713T16 14m3 0q.425 0 .713-.288T20 13t-.288-.712T19 12t-.712.288T18 13t.288.713T19 14m-3 3q.425 0 .713-.288T17 16t-.288-.712T16 15t-.712.288T15 16t.288.713T16 17m3 0q.425 0 .713-.288T20 16t-.288-.712T19 15t-.712.288T18 16t.288.713T19 17m-9 0h4v-5h-4z"></path></svg>
                  <a href={"tel:" + process.env.NEXT_PUBLIC_FAX_NUM} target="_blank">FAX: {process.env.NEXT_PUBLIC_FAX_NUM_FORMATTED}</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>
                  <a href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL_ADDRESS} target="_blank">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
                </aside>

                {/* <aside className={`${styles.contactItem} ${styles.listItem}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>
                  <a href="" target="_blank">MAILING ADDRESS:{process.env.NEXT_PUBLIC_MAILING_ADDRESS}</a>
                </aside> */}

                {/* <aside className={`${styles.contactItem} ${styles.listItem}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>
                  <a href="https://maps.app.goo.gl/PLZFDLhLLDhcWuEG8" target="_blank">IMPOUND ADDRESS: {process.env.NEXT_PUBLIC_IMPOUND_ADDRESS}</a>
                </aside>  */}

                

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>
                  <a href="https://maps.app.goo.gl/ixyGyVuaGLd7Aduq9" target="_blank">ADDRESS: {process.env.NEXT_PUBLIC_BUSINESS_CITY_STATE}</a>
                </aside>


              </ul>
            </aside>
          </div>

      </div>

      <div className={styles.copyright}>© Copyright 2024 to Present - <a href="https://www.romesites.co" target="_blank">Rome Sites</a></div>
        
       
    </footer>
  )
}
