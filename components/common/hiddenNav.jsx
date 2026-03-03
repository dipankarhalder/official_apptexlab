"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@/styles/nav.module.css";
import Link from "next/link";

const img_path = "https://res.cloudinary.com/dz8zfbrng/image/upload";
const navItems = [
  {
    title: "Works",
    link: "/projects",
    imgPath: "/v1772273936/18_st7alt.avif",
  },
  {
    title: "Services",
    link: "/services",
    imgPath: "/v1772273936/18_st7alt.avif",
  },
  {
    title: "Products 1",
    link: "/products",
    imgPath: "/v1772273936/18_st7alt.avif",
  },
  {
    title: "Products 2",
    link: "/products",
    imgPath: "/v1772273936/18_st7alt.avif",
  },
  {
    title: "Products 3",
    link: "/products",
    imgPath: "/v1772273936/18_st7alt.avif",
  },
  {
    title: "Products 4",
    link: "/products",
    imgPath: "/v1772273936/18_st7alt.avif",
  },
  {
    title: "Industries",
    link: "/industries",
    imgPath: "/v1772273936/18_st7alt.avif",
  },
  {
    title: "About",
    link: "/about",
    imgPath: "/v1772273936/18_st7alt.avif",
  },
];

export const HiddenNav = ({ mainShifted }) => {
  const containerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const list = listRef.current;

    if (!container || !list) return;

    const xTo = gsap.quickTo(list, "x", {
      duration: 1,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      const visibleWidth = container.clientWidth; // correct width
      const totalWidth = list.scrollWidth;

      const maxMove = totalWidth - visibleWidth;

      if (maxMove <= 0) return;

      const mouseX = e.clientX - rect.left;
      const progress = mouseX / visibleWidth;

      // Clamp between 0 and 1
      const clamped = gsap.utils.clamp(0, 1, progress);

      const moveX = -maxMove * clamped;

      xTo(moveX);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.hiddenNav} ${mainShifted ? styles.show : ""}`}
    >
      <div className={styles.inside_bottom_nav_area}>
        <div className={styles.nav_inner}>
          <ul ref={listRef}>
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.link}>
                  <h5>{item.title}</h5>
                  <picture>
                    <source
                      srcSet={`${img_path}/f_auto,q_auto,dpr_auto,w_400${item.imgPath}`}
                      type="image/avif"
                      media="(max-width: 640px)"
                    />
                    <source
                      srcSet={`${img_path}/f_auto,q_auto,dpr_auto,w_800${item.imgPath}`}
                      type="image/avif"
                      media="(max-width: 1280px)"
                    />
                    <img
                      src={`${img_path}/f_auto,q_auto,dpr_auto,w_1200${item.imgPath}`}
                      alt={`banner product image ${item.title + 1}`}
                      loading={"lazy"}
                      fetchPriority={"auto"}
                    />
                  </picture>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
