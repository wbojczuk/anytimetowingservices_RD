"use client"

import "./hamburgers.min.css"
import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
// import Image from "next/image"
import NavOption from "./NavOption"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnTouch, setIsOnTouch] = useState(false)
  const [isOnMobile, setIsOnMobile] = useState(false) 
  const [isTopBarOpen, setIsTopBarOpen] = useState(true)


  // ****************** Add NAV OPTION REFS HERE ******************

  const homeRef: any = useRef()
  const aboutRef: any = useRef()
  const contactRef: any = useRef()
  const impoundingRef: any = useRef()
  const galleryRef: any = useRef()

  const logoRef: any = useRef()
  const hamburgerRef: any = useRef()
  const contentRef: any = useRef()
  const content2Ref: any = useRef()
  const topBarRef: any = useRef()
  const navRef: any = useRef()


  // ****************** Add Current Page Triggers HERE ******************

  const currentPageTriggers = [
    {
      triggers: ["/about"],
      ref: aboutRef
    },
    {
      triggers: ["/contact"],
      ref: contactRef
    },
    {
      triggers: ["/", "/home"],
      ref: homeRef
    },
    {
      triggers: ["/gallery"],
      ref: galleryRef
    }
    
  ]

  const pathname = usePathname()

  useEffect(()=>{
    currentPageTriggers.forEach((data)=>{
      if(data.triggers.includes(pathname)){
        data.ref.current.classList.add(styles.active)
      }else{
        data.ref.current.classList.remove(styles.active)
      }
    })
  }, [pathname])


  useEffect(()=>{
    const isOnTouch = window.matchMedia("(max-width: 990px)").matches
    setIsOnTouch(isOnTouch)
    setIsOnMobile(window.matchMedia("(max-width: 649px)").matches)

    if(isOnTouch){
      window.addEventListener("click", (evt)=>{
        //@ts-ignore
        if(!(evt.target.classList.contains("nav-noclose"))){
          closeMenu()
        }
      })
    }
  }, [])



  function toggleMenu(){
    if(menuOpen){
     closeMenu()
    }else{
     openMenu()
    }
  }

  function closeMenu(){
    setMenuOpen(false)
    hamburgerRef.current.classList.remove("is-active")
    contentRef.current.style.transform =  "scaleY(0)"
  }

  function openMenu(){
    setMenuOpen(true)
    hamburgerRef.current.classList.add("is-active")
    contentRef.current.style.transform =  "scaleY(1)"
  }
  
  const hamburgerClass = "hamburger--collapse"
  /* Here’s the list of hamburger-type classes you can choose from:

        hamburger--3dx
        hamburger--3dx-r
        hamburger--3dy
        hamburger--3dy-r
        hamburger--3dxy
        hamburger--3dxy-r
        hamburger--arrow
        hamburger--arrow-r
        hamburger--arrowalt
        hamburger--arrowalt-r
        hamburger--arrowturn
        hamburger--arrowturn-r
        hamburger--boring
        hamburger--collapse
        hamburger--collapse-r
        hamburger--elastic
        hamburger--elastic-r
        hamburger--emphatic
        hamburger--emphatic-r
        hamburger--minus
        hamburger--slider
        hamburger--slider-r
        hamburger--spin
        hamburger--spin-r
        hamburger--spring
        hamburger--spring-r
        hamburger--stand
        hamburger--stand-r
        hamburger--squeeze
        hamburger--vortex
        hamburger--vortex-r */


  return (
    <nav ref={navRef} className={styles.mainNav}>

      <div ref={topBarRef} className={styles.topBar}>
      <span></span>

        <div className={styles.topBarLinks}>
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M152.27 37.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.23 8.23 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 184 112a8.23 8.23 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8.44 8.44 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6.13 6.13 0 0 1 .57-.77L104 87.15l-21-47a.61.61 0 0 1 0-.12A40.2 40.2 0 0 0 48 80a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"/></svg>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>

          <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>

          {/* <a target="_blank" href="https://maps.app.goo.gl/NguhYM3yseYdcCxeA"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"/></svg>{process.env.NEXT_PUBLIC_BUSINESS_CITY_STATE}</a> */}

          
          
        </div>
      </div>

      <div className={styles.navContent}>
      <Link href="/" className={styles.logo}>
        <img ref={logoRef} src="/img/logo3.webp" className={styles.logoImg} width={500} height={250} alt="Logo" />
        
      </Link>

        

     
        
      <div className={styles.contentWrapper}>
      <button id="hamburgerMenu" onClick={toggleMenu} ref={hamburgerRef} className={`hamburger ${hamburgerClass} mobile tablet nav-noclose`} type="button">
        <span className="hamburger-box" style={{pointerEvents: "none"}}>
          <span className="hamburger-inner" style={{pointerEvents: "none"}}></span>
        </span>
      </button>
        <div ref={content2Ref} className={styles.content}>
          <ul ref={contentRef} className={styles.links}>

{/******************  PUT NAV OPTIONS HERE  ************************/}

          <NavOption
          title="Home"
          url="/"
          ref={homeRef}
          />


          <NavOption
          title="About"
          url="/about"
          ref={aboutRef}
          />
          <NavOption
          title="Gallery"
          url="/gallery"
          ref={galleryRef}
          />
          <NavOption
          title="Contact"
          url="/contact"
          ref={contactRef}
          />

          
          <Link href={"/contact"} className={styles.cta}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.96 16.45c.01-.15.04-.3.04-.45v.5zM11 16c0 .71.15 1.39.42 2H6v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8l2.08-6c.2-.58.76-1 1.42-1h11c.66 0 1.22.42 1.42 1L21 11v5c0-2.76-2.24-5-5-5s-5 2.24-5 5m-3-2.5c0-.83-.67-1.5-1.5-1.5S5 12.67 5 13.5S5.67 15 6.5 15S8 14.33 8 13.5M19 10l-1.5-4.5h-11L5 10zm3.87 11.19l-4.11-4.11c.41-1.04.18-2.26-.68-3.11c-.9-.91-2.25-1.09-3.34-.59l1.94 1.94l-1.35 1.36l-1.99-1.95c-.54 1.09-.29 2.44.59 3.35a2.91 2.91 0 0 0 3.12.68l4.11 4.1c.18.19.45.19.63 0l1.04-1.03c.22-.18.22-.5.04-.64"/></svg>
          <span>Get Help Now!</span>
          </Link>
          

          </ul>

          {/* ******* PUT SHOPIFY CART HERE ******** */}

        </div>
        
        </div>
      </div>

      
    </nav>
  )
}
