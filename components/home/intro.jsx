"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home.module.css";

gsap.registerPlugin(ScrollTrigger);

const COLUMN_OFFSETS = [-590, -640, -720, -550, -520];
const img_path = "https://res.cloudinary.com/dz8zfbrng/image/upload";
const COLUMNS = [
  [
    "/v1772273936/18_st7alt.avif",
    "/v1772273936/17_tslldf.avif",
    "/v1772273936/20_mecsrr.avif",
    "/v1772273936/16_clzcmk.avif",
    "/v1772273936/19_qcxm0q.avif",
    "/v1772273935/15_ov2ps6.avif",
  ],
  [
    "/v1772273935/14_jxaxjf.avif",
    "/v1772273935/11_pwp4kt.avif",
    "/v1772273935/9_xgzrpy.avif",
    "/v1772273935/13_olyhqs.avif",
    "/v1772273935/12_smqj3j.avif",
    "/v1772273935/10_vwunqa.avif",
  ],
  [
    "/v1772273935/8_i9kasp.avif",
    "/v1772273935/7_urdcly.avif",
    "/v1772273935/5_gxbih1.avif",
    "/v1772273934/1_oilara.avif",
    "/v1772273934/6_eulyc3.avif",
    "/v1772273934/3_t85ycv.avif",
  ],
  [
    "/v1772273934/2_leleui.avif",
    "/v1772273933/4_g7s3wt.avif",
    "/v1772273935/11_pwp4kt.avif",
    "/v1772273935/9_xgzrpy.avif",
    "/v1772273935/13_olyhqs.avif",
    "/v1772273935/12_smqj3j.avif",
  ],
  [
    "/v1772273935/14_jxaxjf.avif",
    "/v1772273935/11_pwp4kt.avif",
    "/v1772273935/9_xgzrpy.avif",
    "/v1772273936/16_clzcmk.avif",
    "/v1772273936/19_qcxm0q.avif",
    "/v1772273935/15_ov2ps6.avif",
  ],
];

const ScrollArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 4V16M10 16L16 10M10 16L4 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Intro = () => {
  const heroRef = useRef(null);
  const punctRef = useRef(null);
  const titleRef = useRef(null);
  const bodytxtRef = useRef(null);
  const bannerRef = useRef(null);
  const bannerBgRef = useRef(null);
  const bannerColumnsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const titleEl = titleRef.current;
      const punctEl = punctRef.current;
      const punctItems = punctEl.querySelectorAll("span");
      const bodytxtEl = bodytxtRef.current;

      const columns = gsap.utils.toArray(
        `.${styles.app_column}`,
        heroRef.current,
      );

      const originalText = titleEl.innerText;
      titleEl.innerHTML = originalText
        .split("")
        .map(
          (char) =>
            `<span class="app_char">
              ${char === " " ? "&nbsp;" : char}
            </span>`,
        )
        .join("");

      const chars = titleEl.querySelectorAll(".app_char");
      gsap.defaults({
        ease: "power2.out",
      });
      gsap.set(bannerRef.current, {
        width: "50%",
      });
      gsap.set(bannerColumnsRef.current, {
        rotationX: 26,
        rotationY: -10,
        rotationZ: 26,
        willChange: "transform",
      });
      gsap.set(columns, {
        opacity: 0,
        scale: 1.3,
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

      gsap.to(columns, {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: {
          each: 0.15,
          from: "center",
        },
      });
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        delay: 0.8,
        filter: "blur(0px)",
        ease: "power3.out",
      });
      gsap.to(punctItems, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.2,
        delay: 2,
        ease: "power3.out",
      });
      gsap.to(bodytxtEl, {
        opacity: 1,
        filter: "blur(0px)",
        delay: 2.8,
        ease: "power3.out",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=130%",
          scrub: 0.4,
          pin: true,
        },
      });
      tl.to(
        bannerRef.current,
        {
          width: "100%",
        },
        0,
      )
        .to(
          bannerColumnsRef.current,
          {
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            onComplete: () =>
              gsap.set(bannerColumnsRef.current, {
                willChange: "auto",
              }),
          },
          0,
        )
        .to(
          bannerBgRef.current,
          {
            opacity: 0,
          },
          0,
        )
        .to(
          columns,
          {
            y: (i) => COLUMN_OFFSETS[i] ?? -130,
            ease: "none",
          },
          0,
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.app_page_intro} ref={heroRef}>
      <div className={styles.app_intro_content}>
        <div className={styles.app_intor_inside}>
          <h1 ref={titleRef}>Turning ideas into digital success stories</h1>
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
        <div className={styles.app_hero_scroll}>
          <ScrollArrow />
          <span>Scroll Down</span>
        </div>
      </div>
      <div className={styles.app_intro_hero_banner} ref={bannerRef}>
        <div className={styles.app_hero_banner_columns} ref={bannerColumnsRef}>
          {COLUMNS.map((images, colIndex) => (
            <div className={styles.app_column} key={colIndex}>
              {images.map((src, imgIndex) => (
                <div className={styles.app_image_wrapper} key={imgIndex}>
                  <picture>
                    <source
                      srcSet={`${img_path}/f_auto,q_auto,dpr_auto,w_400${src}`}
                      type="image/avif"
                      media="(max-width: 640px)"
                    />
                    <source
                      srcSet={`${img_path}/f_auto,q_auto,dpr_auto,w_800${src}`}
                      type="image/avif"
                      media="(max-width: 1280px)"
                    />
                    <img
                      src={`${img_path}/f_auto,q_auto,dpr_auto,w_1200${src}`}
                      alt={`banner product image ${imgIndex + 1}`}
                      loading={colIndex === 0 ? "eager" : "lazy"}
                      fetchPriority={colIndex === 0 ? "high" : "auto"}
                    />
                  </picture>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.app_hero_banner_bg} ref={bannerBgRef}></div>
      </div>
    </div>
  );
};
