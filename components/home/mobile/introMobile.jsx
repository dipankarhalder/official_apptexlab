"use client";

import styles from "@/styles/mobile.module.css";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const IntroMobile = () => {
  const heroRef = useRef(null);
  const punctRef = useRef(null);
  const titleRef = useRef(null);
  const bodytxtRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const titleEl = titleRef.current;
      const punctEl = punctRef.current;
      const punctItems = punctEl.querySelectorAll("span");
      const bodytxtEl = bodytxtRef.current;
      const originalText = titleEl.innerText;
      titleEl.innerHTML = originalText
        .split("")
        .map(
          (char) =>
            `<span class="app_char">${char === " " ? "&nbsp;" : char}</span>`,
        )
        .join("");
      const chars = titleEl.querySelectorAll(".app_char");

      gsap.defaults({
        ease: "power2.out",
      });

      gsap.set(chars, {
        y: 60,
        opacity: 0,
        filter: "blur(30px)",
      });
      gsap.set(punctItems, {
        y: 40,
        opacity: 0,
        filter: "blur(20px)",
      });
      gsap.set(bodytxtEl, {
        opacity: 0,
        filter: "blur(30px)",
      });
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.2,
        filter: "blur(0px)",
        ease: "power3.out",
      });
      gsap.to(punctItems, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.2,
        delay: 0.8,
        ease: "power3.out",
      });
      gsap.to(bodytxtEl, {
        opacity: 1,
        filter: "blur(0px)",
        delay: 2,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.app_page_intro} ref={heroRef}>
      <div className={styles.app_intor_inside}>
        <h1 ref={titleRef}>Turning ideas into digital success stories.</h1>
        <div className={styles.app_punct_line} ref={punctRef}>
          <span>6 years experience</span>
          <span>Countless products</span>
          <span>Always fast and forward</span>
        </div>
        <p ref={bodytxtRef}>
          We deliver innovative IT solutions and thoughtfully designed digital
          experiences that help organizations across industries achieve
          sustainable growth and long-term success.
        </p>
      </div>
    </div>
  );
};
