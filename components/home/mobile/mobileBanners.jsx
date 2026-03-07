import styles from "@/styles/mobile.module.css";

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
];

export const MobileBanners = () => {
  return (
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
    </div>
  );
};
