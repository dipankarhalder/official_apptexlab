import styles from "@/styles/home.module.css";

const COLUMN_OFFSETS = [-590, -640, -720, -550, -470];
const img_path = "https://res.cloudinary.com/dz8zfbrng/image/upload";
const COLUMNS = [
  [
    "/v1772273936/18_st7alt.avif",
    "/v1772273936/17_tslldf.avif",
    "/v1772273936/20_mecsrr.avif",
    "/v1772273936/16_clzcmk.avif",
    "/v1772273936/19_qcxm0q.avif",
    "/v1772273935/15_ov2ps6.avif",
  ],
  [
    "/v1772273935/14_jxaxjf.avif",
    "/v1772273935/11_pwp4kt.avif",
    "/v1772273935/9_xgzrpy.avif",
    "/v1772273935/13_olyhqs.avif",
    "/v1772273935/12_smqj3j.avif",
    "/v1772273935/10_vwunqa.avif",
  ],
  [
    "/v1772273935/8_i9kasp.avif",
    "/v1772273935/7_urdcly.avif",
    "/v1772273935/5_gxbih1.avif",
    "/v1772273934/1_oilara.avif",
    "/v1772273934/6_eulyc3.avif",
    "/v1772273934/3_t85ycv.avif",
  ],
  [
    "/v1772273934/2_leleui.avif",
    "/v1772273933/4_g7s3wt.avif",
    "/v1772273935/11_pwp4kt.avif",
    "/v1772273935/9_xgzrpy.avif",
    "/v1772273935/13_olyhqs.avif",
    "/v1772273935/12_smqj3j.avif",
  ],
];

const ScrollArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 4V16M10 16L16 10M10 16L4 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Intro = () => {
  return (
    <div className={styles.app_page_intro}>
      <div className={styles.app_intro_content}>
        <div className={styles.app_intor_inside}>
          <h1>Turning ideas into digital success stories</h1>
          <div className={styles.app_punct_line}>
            <span>6 years experience</span>
            <span>Countless products</span>
            <span>Always fast and forward</span>
          </div>
          <p>
            We deliver innovative IT solutions and thoughtfully designed digital
            experiences that help organizations across industries achieve
            sustainable growth and long-term success.
          </p>
        </div>
        <div className={styles.app_hero_scroll}>
          <ScrollArrow />
          <span>Scroll Down</span>
        </div>
      </div>
      <div className={styles.app_intro_hero_banner}>
        <div className={styles.app_hero_banner_columns}>
          {COLUMNS.map((images, colIndex) => (
            <div className={styles.app_column} key={colIndex}>
              {images.map((src, imgIndex) => (
                <div className={styles.app_image_wrapper} key={imgIndex}>
                  <picture>
                    <source
                      srcSet={`${img_path}/f_auto,q_auto,dpr_auto,w_400${src}`}
                      type="image/avif"
                      media="(max-width: 640px)"
                    />
                    <source
                      srcSet={`${img_path}/f_auto,q_auto,dpr_auto,w_800${src}`}
                      type="image/avif"
                      media="(max-width: 1280px)"
                    />
                    <img
                      src={`${img_path}/f_auto,q_auto,dpr_auto,w_1200${src}`}
                      alt={`banner product image ${imgIndex + 1}`}
                      loading={colIndex === 0 ? "eager" : "lazy"}
                      fetchPriority={colIndex === 0 ? "high" : "auto"}
                    />
                  </picture>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.app_hero_banner_bg}></div>
      </div>
    </div>
  );
};
