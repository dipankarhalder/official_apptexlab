import styles from "@/styles/home.module.css";
import { Intro } from "@/components/home/intro";
import { MainLink } from "@/components/home/mainLink";
import { SpotLight } from "@/components/home/spotLight";
import { Quote } from "@/components/home/quote";

export default function Home() {
  return (
    <section className={styles.app_page_home}>
      <Intro />
      <MainLink />
      <SpotLight />
      <Quote />
    </section>
  );
}
