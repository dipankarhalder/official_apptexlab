import Link from "next/link";
import { Logo } from "../logo";
import styles from "@/styles/mobile.module.css";

export const MobileHeader = () => {
  return (
    <div className={styles.mobileHeaderWrapper}>
      <div className={styles.app_nav_logo}>
        <Logo />
      </div>
      {/* <div className={styles.app_nav_contact}>
        <Link href="">Let&apos;s talks</Link>
      </div> */}
    </div>
  );
};
