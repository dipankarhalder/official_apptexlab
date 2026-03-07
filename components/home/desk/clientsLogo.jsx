"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home.module.css";

const imgBasePath = "https://res.cloudinary.com/dz8zfbrng/image/upload";
const logoTop = [
  {
    imgpath: `${imgBasePath}/v1772367180/c1_qn2nk1.avif`,
    altag: "Arindam",
  },
  {
    imgpath: `${imgBasePath}/v1772367181/c4_g1kafw.avif`,
    altag: "Sohini",
  },
  {
    imgpath: `${imgBasePath}/v1772367180/c2_y77yes.avif`,
    altag: "Madhurima",
  },
  {
    imgpath: `${imgBasePath}/v1772367180/c3_idyrae.avif`,
    altag: "Ishita",
  },
  {
    imgpath: `${imgBasePath}/v1772367181/c5_thswdj.avif`,
    altag: "Anirban",
  },
  {
    imgpath: `${imgBasePath}/v1772367181/c7_vtcgu9.avif`,
    altag: "Arvind",
  },
];

const logoBottom = [
  {
    imgpath: `${imgBasePath}/v1772367182/c6_rrkyv3.avif`,
    altag: "Sohini",
  },
  {
    imgpath: `${imgBasePath}/v1772367182/c10_mtsd2o.avif`,
    altag: "Madhurima",
  },
  {
    imgpath: `${imgBasePath}/v1772367182/c8_bh8j2t.avif`,
    altag: "Ishita",
  },
  {
    imgpath: `${imgBasePath}/v1772367182/c11_lzfbcc.avif`,
    altag: "Anirban",
  },
  {
    imgpath: `${imgBasePath}/v1772367182/c13_sg4y8n.avif`,
    altag: "Arindam",
  },
  {
    imgpath: `${imgBasePath}/v1772367181/c9_xigiyn.avif`,
    altag: "Arvind",
  },
];

gsap.registerPlugin(ScrollTrigger);

export const ClientsLogo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const logos = section.querySelectorAll(`.${styles.app_wrap_logos} li`);

      gsap.fromTo(
        logos,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.app_client_section} ref={sectionRef}>
      <div className={styles.app_client_logo_wrapper}>
        <h2>A trusted technology partner</h2>
        <div className={styles.app_dev_quotes}>
          <span>Design</span>
          <span>Develop</span>
          <span>Maintain</span>
          <span>Scale</span>
        </div>
        <p>
          ApptexLab helps ambitious organizations reimagine their digital
          landscape—designing seamless, end-to-end experiences that enhance
          performance, streamline operations, and accelerate growth.
        </p>
        <div className={styles.app_wrap_logos}>
          <ul>
            {logoTop.map((item) => (
              <li key={item.altag}>
                <Image
                  src={item.imgpath}
                  alt={item.altag}
                  width={120}
                  height={120}
                  sizes="cover"
                />
              </li>
            ))}
          </ul>
          <ul>
            {logoBottom.map((item) => (
              <li key={item.altag}>
                <Image
                  src={item.imgpath}
                  alt={item.altag}
                  width={120}
                  height={120}
                  sizes="cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
