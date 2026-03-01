import Image from "next/image";
import styles from "@/styles/home.module.css";

const imgBasePath = "https://res.cloudinary.com/dz8zfbrng/image/upload";
const avatarBig = [
  {
    imgpath: `${imgBasePath}/v1772322091/aivatar_cir_26_jvynlq.png`,
    altag: "Arindam",
  },
  {
    imgpath: `${imgBasePath}/v1772322090/aivatar_cir_27_xd83gp.png`,
    altag: "Sohini",
  },
  {
    imgpath: `${imgBasePath}/v1772322089/aivatar_cir_30_l3nupd.png`,
    altag: "Madhurima",
  },
  {
    imgpath: `${imgBasePath}/v1772322090/aivatar_cir_36_xeql9x.png`,
    altag: "Ishita",
  },
  {
    imgpath: `${imgBasePath}/v1772322089/aivatar_cir_01_uxjjtj.png`,
    altag: "Anirban",
  },
  {
    imgpath: `${imgBasePath}/v1772322089/aivatar_cir_13_msqdn5.png`,
    altag: "Ritwick",
  },
];

const avatarMedium = [
  {
    imgpath: `${imgBasePath}/v1772322089/aivatar_cir_09_ntmdh9.png`,
    altag: "Ishita",
  },
  {
    imgpath: `${imgBasePath}/v1772322089/aivatar_cir_30_l3nupd.png`,
    altag: "Anirban",
  },
  {
    imgpath: `${imgBasePath}/v1772322089/aivatar_cir_35_fgglc3.png`,
    altag: "Ritwick",
  },
  {
    imgpath: `${imgBasePath}/v1772322089/aivatar_cir_16_muh7pj.png`,
    altag: "Arindam",
  },
  {
    imgpath: `${imgBasePath}/v1772322090/aivatar_cir_27_xd83gp.png`,
    altag: "Sohini",
  },
  {
    imgpath: `${imgBasePath}/v1772322089/aivatar_cir_01_uxjjtj.png`,
    altag: "Madhurima",
  },
];

export const Quote = () => {
  return (
    <div className={styles.app_quotes}>
      <div className={styles.app_inside_quote}>
        <h2>
          Big achievements are just a series of small and manageable steps.
        </h2>
        <p>
          ApptexLab is a premier software development firm located in West
          Bengal, India, delivering sophisticated, future-ready digital
          solutions. Backed by a team of highly skilled professionals, we
          combine technical excellence with strategic insight to craft bespoke
          products tailored to each client&apos;s objectives.
        </p>
      </div>
      <div className={`${styles.app_quote_circle} ${styles.big_circle}`}>
        {avatarBig.map((item, idx) => (
          <span key={idx}>
            <Image
              src={item.imgpath}
              alt={item.altag}
              width={80}
              height={80}
              sizes="80px"
            />
          </span>
        ))}
      </div>
      <div className={`${styles.app_quote_circle} ${styles.medium_circle}`}>
        {avatarMedium.map((item, idx) => (
          <span key={idx}>
            <Image
              src={item.imgpath}
              alt={item.altag}
              width={80}
              height={80}
              sizes="80px"
            />
          </span>
        ))}
      </div>
    </div>
  );
};
