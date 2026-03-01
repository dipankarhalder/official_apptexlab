import Link from "next/link";
import styles from "@/styles/home.module.css";

const Arrow = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 18L18 6M18 6H10M18 6V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MainLink = () => {
  return (
    <div className={styles.app_page_main_links}>
      <div className={styles.app_main_link_info}>
        <span>Designing future</span>
        <span>Digital experiences</span>
      </div>
      <ul>
        <li>
          <Link href="/">
            <span>1</span>
            Application Development
            <Arrow />
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>2</span>
            Fire Safety Solutions
            <Arrow />
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>3</span>
            Security Systems
            <Arrow />
          </Link>
        </li>
      </ul>
      <div className={styles.app_middle_line}></div>
      <div className={styles.app_rotate_line}></div>
    </div>
  );
};
