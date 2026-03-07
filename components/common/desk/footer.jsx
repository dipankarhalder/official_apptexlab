"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles//footer.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      scrub: 2,
      onUpdate: (self) => {
        tween.timeScale(self.direction === 1 ? 1 : -1);
      },
    });
  }, []);

  return (
    <div className={styles.footer_cover}>
      <div className={styles.appMarqueeScroll}>
        <div ref={marqueeRef} className={styles.appMarqueCover}>
          <p>
            - UI/UX Design - Application Development - Product Development -
            Mobile App Development - Web Design and Development - Digital
            Commerce Solution
          </p>
          <p>
            - UI/UX Design - Application Development - Product Development -
            Mobile App Development - Web Design and Development - Digital
            Commerce Solution
          </p>
        </div>
      </div>
      <div className={styles.app_recognition}>
        <div className={styles.app_follow_area}>
          <p>Follow us</p>
          <ul>
            <li>
              <Image
                src={
                  "https://res.cloudinary.com/dz8zfbrng/image/upload/v1772658009/Facebook_logo__square_b9uc5u.avif"
                }
                alt={"Facebook"}
                width={36}
                height={36}
                sizes="cover"
              />
            </li>
            <li>
              <Image
                src={
                  "https://res.cloudinary.com/dz8zfbrng/image/upload/v1772658011/LinkedIn_logo_initials.png_wc0efv.avif"
                }
                alt={"Linkedin"}
                width={36}
                height={36}
                sizes="cover"
              />
            </li>
            <li>
              <Image
                src={
                  "https://res.cloudinary.com/dz8zfbrng/image/upload/v1772658011/Instagram_icon.png_qfmu0t.avif"
                }
                alt={"Instargam"}
                width={36}
                height={36}
                sizes="cover"
              />
            </li>
            <li>
              <Image
                src={
                  "https://res.cloudinary.com/dz8zfbrng/image/upload/v1772658010/new-2023-twitter-logo-x-icon-design_1017-45418_vbio6x.avif"
                }
                alt={"X"}
                width={36}
                height={36}
                sizes="cover"
              />
            </li>
            <li>
              <Image
                src={
                  "https://res.cloudinary.com/dz8zfbrng/image/upload/v1772658008/124037_wyievg.avif"
                }
                alt={"Dribbble"}
                width={36}
                height={36}
                sizes="cover"
              />
            </li>
            <li>
              <Image
                src={
                  "https://res.cloudinary.com/dz8zfbrng/image/upload/v1772658009/Google_Favicon_2025.svg_au68vc.avif"
                }
                alt={"Google"}
                width={36}
                height={36}
                sizes="cover"
              />
            </li>
          </ul>
        </div>
        <div className={styles.app_recog_area}>
          <p>Our Archievements</p>
          <ul>
            <li>
              <Image
                src={
                  "https://res.cloudinary.com/dz8zfbrng/image/upload/v1772657864/1_bxczcj.jpg"
                }
                alt={"Government e Market"}
                width={36}
                height={36}
                sizes="cover"
              />
            </li>
            <li>
              <Image
                src={
                  "https://res.cloudinary.com/dz8zfbrng/image/upload/v1772657865/2_ekjfvc.jpg"
                }
                alt={"Make in India"}
                width={120}
                height={52}
                sizes="cover"
              />
            </li>
            <li>
              <Image
                src={
                  "https://res.cloudinary.com/dz8zfbrng/image/upload/v1772657864/3_tqma1q.jpg"
                }
                alt={"Micro Small and Medium Enterprise"}
                width={120}
                height={52}
                sizes="cover"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.mainFooter}>
        <div className={styles.footreCoverArea}>
          <div className={styles.footerRow}></div>
          <div className={styles.footerRow}></div>
          <div className={styles.footerRow}></div>
          <div className={styles.footerRow}></div>
          <div className={styles.footerRow}></div>
        </div>
      </div>
    </div>
  );
};
