"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/nav.module.css";
import { Logo } from "../logo";

const navItems = [
  { title: "Works", link: "/projects" },
  { title: "Services", link: "/services" },
  { title: "Industries", link: "/industries" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "https://calendly.com/heydipankar/30min" },
];

export const Navigation = () => {
  const pathname = usePathname();
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
      });
    }

    if (menuRef.current) {
      const items = menuRef.current.querySelectorAll("li");
      gsap.fromTo(
        items,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 1.5,
        },
      );
    }

    if (contactRef.current) {
      gsap.to(contactRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
      });
    }
  }, []);

  return (
    <section className={styles.app_header}>
      <div className={styles.app_nav_wrap}>
        <div className={styles.app_nav_logo} ref={logoRef}>
          <Logo />
        </div>
        <div className={styles.app_nav_links}>
          <ul ref={menuRef}>
            {navItems.map((item) => {
              const isExternal = item.link.startsWith("http");
              return (
                <li
                  key={item.title}
                  className={
                    !isExternal && isActive(item.link) ? styles.active : ""
                  }
                >
                  {isExternal ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link href={item.link}>{item.title}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.app_nav_contact} ref={contactRef}>
        <Link href="">Lets talk</Link>
      </div>
    </section>
  );
};
