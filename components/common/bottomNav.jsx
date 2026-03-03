"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@/styles/nav.module.css";

export const BottomNav = ({ onClick }) => {
  const text = "Menu • Menu • Menu • Menu • Menu • ";
  const textRef = useRef(null);
  const [show, setShow] = useState(false);
  const letters = text.split("");

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);

    if (textRef.current) {
      gsap.to(textRef.current, {
        rotate: 1080,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.killAll();
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
