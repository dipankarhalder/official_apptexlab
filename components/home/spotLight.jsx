"use client";

import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home.module.css";

gsap.registerPlugin(ScrollTrigger);

const imgPath = "https://res.cloudinary.com/dz8zfbrng/image/upload";
const indusInfo = [
  { id: 1, imgpath: "/v1772309105/in-1_gqromz.avif", title: "Steel factory" },
  { id: 2, imgpath: "/v1772309103/in-2_zns5bl.avif", title: "Coal factory" },
  { id: 3, imgpath: "/v1772309103/in-4_lexe1n.avif", title: "Power Plant" },
  {
    id: 4,
    imgpath: "/v1772309104/in-5_b3rlyc.avif",
    title: "Marine Jetty and Ports",
  },
  {
    id: 5,
    imgpath: "/v1772309103/in-6_wuv5vh.avif",
    title: "Offshore Oil Sites",
  },
  {
    id: 6,
    imgpath: "/v1772309104/in-7_isp13h.avif",
    title: "Education System",
  },
  { id: 7, imgpath: "/v1772309105/in-8_rgqm1z.avif", title: "Warehouse" },
  { id: 8, imgpath: "/v1772309105/in-9_pwgytk.avif", title: "Pharmaceutical" },
  {
    id: 9,
    imgpath: "/v1772309106/in-10_snc0ko.avif",
    title: "Private Construction",
  },
  {
    id: 10,
    imgpath: "/v1772309105/in-11_wb2bp8.avif",
    title: "Defense System",
  },
  { id: 11, imgpath: "/v1772309105/in-12_riweu3.avif", title: "Rail Tunnels" },
  { id: 12, imgpath: "/v1772309106/in-13_vh4fkv.avif", title: "Airports" },
  { id: 13, imgpath: "/v1772309106/in-14_sdxk4b.avif", title: "Server Room" },
  {
    id: 14,
    imgpath: "/v1772309106/in-15_wa4ei1.avif",
    title: "Fashion and Luxury",
  },
];

export const SpotLight = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const spotlightSection = sectionRef.current;

      const projectIndex = spotlightSection.querySelector(
        `.${styles.app_project_index} h1`,
      );
      const projectImagesContainer = spotlightSection.querySelector(
        `.${styles.app_project_images}`,
      );
      const projectImgs = spotlightSection.querySelectorAll(
        `.${styles.app_project_img}`,
      );
      const projectNamesContainer = spotlightSection.querySelector(
        `.${styles.app_project_names}`,
      );
      const projectNames = spotlightSection.querySelectorAll(
        `.${styles.app_project_names} p`,
      );

      const totalProjectCount = projectNames.length;
      const spotlightSectionHeight = spotlightSection.offsetHeight;
      const spotlightSectionPadding = parseFloat(
        getComputedStyle(spotlightSection).padding,
      );

      const projectIndexHeight = projectIndex.offsetHeight;
      const containerHeight = projectNamesContainer.offsetHeight;
      const imagesHeight = projectImagesContainer.offsetHeight;

      const moveDistanceIndex =
        spotlightSectionHeight -
        spotlightSectionPadding * 2 -
        projectIndexHeight;

      const moveDistanceNames =
        spotlightSectionHeight - spotlightSectionPadding * 2 - containerHeight;

      const moveDistanceImages = window.innerHeight - imagesHeight;
      const imgActivationThreshold = window.innerHeight / 2;

      ScrollTrigger.create({
        trigger: spotlightSection,
        start: "top top",
        end: `+=${window.innerHeight * 5}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          const currentIndex = Math.min(
            Math.floor(progress * totalProjectCount) + 1,
            totalProjectCount,
          );

          projectIndex.innerHTML = `${String(currentIndex).padStart(
            2,
            "0",
          )}/<span>${String(totalProjectCount).padStart(2, "0")}</span>`;

          gsap.set(projectIndex, {
            y: progress * moveDistanceIndex,
          });

          gsap.set(projectImagesContainer, {
            y: progress * moveDistanceImages,
          });

          projectImgs.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (
              rect.top <= imgActivationThreshold &&
              rect.bottom >= imgActivationThreshold
            ) {
              gsap.set(img, { opacity: 1 });
            } else {
              gsap.set(img, { opacity: 0.3 });
            }
          });

          projectNames.forEach((p, index) => {
            const start = index / totalProjectCount;
            const end = (index + 1) / totalProjectCount;

            const projectProgress = Math.max(
              0,
              Math.min(1, (progress - start) / (end - start)),
            );

            gsap.set(p, {
              y: -projectProgress * moveDistanceNames,
              color:
                projectProgress > 0 && projectProgress < 1 ? "#000" : "#b0b0b0",
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.app_spot_light}>
      <div className={styles.app_project_index}>
        <h1>
          01/<span>{indusInfo.length}</span>
        </h1>
      </div>

      <div className={styles.app_project_images}>
        {indusInfo.map((item, idx) => (
          <div key={item.id} className={styles.app_project_img}>
            <picture>
              <source
                srcSet={`${imgPath}/f_auto,q_auto,dpr_auto,w_400${item.imgpath}`}
                type="image/avif"
                media="(max-width: 640px)"
              />
              <source
                srcSet={`${imgPath}/f_auto,q_auto,dpr_auto,w_800${item.imgpath}`}
                type="image/avif"
                media="(max-width: 1280px)"
              />
              <img
                src={`${imgPath}/f_auto,q_auto,dpr_auto,w_1200${item.imgpath}`}
                alt={`Industries image ${idx + 1}`}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
              />
            </picture>
          </div>
        ))}
      </div>

      <div className={styles.app_project_names}>
        {indusInfo.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>

      <div className={styles.app_project_heading}>
        <span>We pride</span>
        <span>Our expertise</span>
        <span>Across industries</span>
      </div>
      <div className={styles.app_line_center}></div>
      <div className={styles.app_line_top}></div>
      <div className={styles.app_line_left}></div>
      <div className={styles.app_line_left_two}></div>
    </section>
  );
};
