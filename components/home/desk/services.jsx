"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home.module.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const sectionRef = useRef(null);
  const imagesWrapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = imagesWrapRef.current;
    if (!section || !container) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(`.${styles.app_services_content_area}`);

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + section.offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.app_home_service_wrap} ref={sectionRef}>
      <div className={styles.app_home_serv_heading_content}>
        <h4>Software Development &amp; Consulting</h4>
        <p>We drive your business forward with innovative solutions</p>
      </div>
      <div className={styles.app_services_content} ref={imagesWrapRef}>
        <div className={styles.app_services_content_area}>
          <div className={styles.app_services_inside_scrolling}>
            <h2>Enterprise Business Solutions</h2>
            <p>Core systems for managing business operations</p>
            <div className={styles.app_serv_row_full}>
              <div className={styles.app_service_side_content}>
                <ul>
                  <li>CRM (Customer Relationship Management)</li>
                  <li>ERP (Enterprise Resource Planning)</li>
                  <li>Payroll Management System</li>
                  <li>POS (Point of Sale System)</li>
                  <li>Business Process Automation</li>
                </ul>
                <Link href="/">more...</Link>
              </div>
              <div className={styles.app_img_content}>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/8_i9kasp.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/10_vwunqa.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app_services_content_area}>
          <div className={styles.app_services_inside_scrolling}>
            <h2>Healthcare & Hospitality Management Systems</h2>
            <p>Industry-specific management software</p>
            <div className={styles.app_serv_row_full}>
              <div className={styles.app_service_side_content}>
                <ul>
                  <li>HMS (Hospital Management System)</li>
                  <li>PMS (Property/Hotel Management System)</li>
                  <li>Hostel Management System</li>
                  <li>Clinic Management System</li>
                </ul>
                <Link href="/">more...</Link>
              </div>
              <div className={styles.app_img_content}>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/8_i9kasp.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/10_vwunqa.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app_services_content_area}>
          <div className={styles.app_services_inside_scrolling}>
            <h2>Education Management Solutions</h2>
            <p>Software for educational institutions</p>
            <div className={styles.app_serv_row_full}>
              <div className={styles.app_service_side_content}>
                <ul>
                  <li>School Management System</li>
                  <li>Library Management System</li>
                  <li>Online Examination System</li>
                  <li>Student Portal Systems</li>
                </ul>
                <Link href="/">more...</Link>
              </div>
              <div className={styles.app_img_content}>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/8_i9kasp.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/10_vwunqa.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app_services_content_area}>
          <div className={styles.app_services_inside_scrolling}>
            <h2>On-Demand & Marketplace Applications</h2>
            <p>Apps that connect users and service providers</p>
            <div className={styles.app_serv_row_full}>
              <div className={styles.app_service_side_content}>
                <ul>
                  <li>Food Delivery App</li>
                  <li>Fitness App</li>
                  <li>Ride Booking App</li>
                  <li>Ride Booking Admin Panel</li>
                  <li>Job Portal</li>
                  <li>Real Estate Application</li>
                  <li>Multi-Vendor Marketplace Platform</li>
                </ul>
                <Link href="/">more...</Link>
              </div>
              <div className={styles.app_img_content}>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/8_i9kasp.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/10_vwunqa.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app_services_content_area}>
          <div className={styles.app_services_inside_scrolling}>
            <h2>E-Commerce & Retail Solutions</h2>
            <p>Online selling platforms</p>
            <div className={styles.app_serv_row_full}>
              <div className={styles.app_service_side_content}>
                <ul>
                  <li>E-commerce Platform</li>
                  <li>Custom Online Store Development</li>
                  <li>Payment Gateway Integration</li>
                  <li>Inventory & Order Management</li>
                </ul>
                <Link href="/">more...</Link>
              </div>
              <div className={styles.app_img_content}>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/8_i9kasp.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/10_vwunqa.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app_services_content_area}>
          <div className={styles.app_services_inside_scrolling}>
            <h2>Web & Mobile Application Development</h2>
            <p>Custom digital product development</p>
            <div className={styles.app_serv_row_full}>
              <div className={styles.app_service_side_content}>
                <ul>
                  <li>Web Application Development</li>
                  <li>Mobile App Development (Android & iOS)</li>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>API Development & Integration</li>
                </ul>
                <Link href="/">more...</Link>
              </div>
              <div className={styles.app_img_content}>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/8_i9kasp.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/10_vwunqa.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app_services_content_area}>
          <div className={styles.app_services_inside_scrolling}>
            <h2>UI/UX Design Services</h2>
            <p>User experience & interface design</p>
            <div className={styles.app_serv_row_full}>
              <div className={styles.app_service_side_content}>
                <ul>
                  <li>Mobile App UX Design</li>
                  <li>Web App UX Design</li>
                  <li>Wireframing & Prototyping</li>
                  <li>UI Design Systems</li>
                </ul>
                <Link href="/">more...</Link>
              </div>
              <div className={styles.app_img_content}>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/8_i9kasp.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/10_vwunqa.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app_services_content_area}>
          <div className={styles.app_services_inside_scrolling}>
            <h2>Digital Marketing & Optimization</h2>
            <p>Online visibility & growth</p>
            <div className={styles.app_serv_row_full}>
              <div className={styles.app_service_side_content}>
                <ul>
                  <li>SEO (Search Engine Optimization)</li>
                  <li>Website Performance Optimization</li>
                  <li>Conversion Rate Optimization</li>
                </ul>
                <Link href="/">more...</Link>
              </div>
              <div className={styles.app_img_content}>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/8_i9kasp.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/10_vwunqa.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app_services_content_area}>
          <div className={styles.app_services_inside_scrolling}>
            <h2>Website Design & Development</h2>
            <p>Business websites</p>
            <div className={styles.app_serv_row_full}>
              <div className={styles.app_service_side_content}>
                <ul>
                  <li>Corporate Website Development</li>
                  <li>Portfolio Websites</li>
                  <li>Landing Page Design</li>
                  <li>CMS Development</li>
                </ul>
                <Link href="/">more...</Link>
              </div>
              <div className={styles.app_img_content}>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/8_i9kasp.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/8_i9kasp.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_400/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_800/v1772273935/10_vwunqa.avif"
                    type="image/avif"
                    media="(max-width: 1280px)"
                  />
                  <img
                    src="https://res.cloudinary.com/dz8zfbrng/image/upload/f_auto,q_auto,dpr_auto,w_1200/v1772273935/10_vwunqa.avif"
                    alt="Enterprise Business Solutions"
                    loading={"lazy"}
                    fetchPriority={"auto"}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
