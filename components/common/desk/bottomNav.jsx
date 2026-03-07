"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "@/styles/nav.module.css";

export const BottomNav = ({ onClick }) => {
  const text = "Explore all the links...";
  const textRef = useRef(null);
  const [show, setShow] = useState(false);
  const letters = text.split("");

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);

    let rotationAnim;
    if (textRef.current) {
      rotationAnim = gsap.to(textRef.current, {
        rotate: 360,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rotationAnim) rotationAnim.kill();
    };
  }, []);

  return (
    <div
      className={styles.fixed_Nav}
      style={{
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transition: "opacity 0.5s ease",
      }}
      onClick={onClick}
    >
      <div className={styles.navIcon}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.13626 9.13628L4.92893 4.92896M4.92893 19.0711L9.16797 14.8321M14.8611 14.8638L19.0684 19.0711M19.0684 4.92896L14.8287 9.16862M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div ref={textRef} className={styles.rotating_text}>
        {letters.map((char, i) => (
          <span
            key={i}
            style={{
              transform: `rotate(${i * 10}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};
