import styles from "@/styles/home.module.css";
import { Intro } from "@/components/home/intro";

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

export default function Home() {
  return (
    <section className={styles.app_page_home}>
      <Intro />
      <div className={styles.app_page_main_links}>
        <ul>
          <li>
            <span>1</span>
            Application Development
            <Arrow />
          </li>
          <li>
            <span>2</span>
            Fire Safety Solutions
            <Arrow />
          </li>
          <li>
            <span>3</span>
            Security Systems
            <Arrow />
          </li>
        </ul>
      </div>
    </section>
  );
}
