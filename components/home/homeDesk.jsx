import styles from "@/styles/home.module.css";
import { Intro } from "@/components/home/desk/intro";
import { MainLink } from "@/components/home/desk/mainLink";
import { SpotLight } from "@/components/home/desk/spotLight";
import { Quote } from "@/components/home/desk/quote";
import { Services } from "@/components/home/desk/services";
import { ClientsLogo } from "@/components/home/desk/clientsLogo";
import { Footer } from "@/components/common/desk/footer";

export const HomeDesk = () => {
  return (
    <section className={styles.app_page_home}>
      <Intro />
      <MainLink />
      <SpotLight />
      <Quote />
      <Services />
      <ClientsLogo />
      <Footer />
    </section>
  );
};
