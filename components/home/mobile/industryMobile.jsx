import styles from "@/styles/mobile.module.css";

const imgPath = "https://res.cloudinary.com/dz8zfbrng/image/upload";
const indusInfo = [
  { id: 1, imgpath: "/v1772309105/in-1_gqromz.avif", title: "Steel factory" },
  { id: 2, imgpath: "/v1772309103/in-2_zns5bl.avif", title: "Coal factory" },
  { id: 3, imgpath: "/v1772309103/in-4_lexe1n.avif", title: "Power Plant" },
  {
    id: 4,
    imgpath: "/v1772309104/in-5_b3rlyc.avif",
    title: "Marine Jetty and Ports",
  },
  {
    id: 5,
    imgpath: "/v1772309103/in-6_wuv5vh.avif",
    title: "Offshore Oil Sites",
  },
  {
    id: 6,
    imgpath: "/v1772309104/in-7_isp13h.avif",
    title: "Education System",
  },
  { id: 7, imgpath: "/v1772309105/in-8_rgqm1z.avif", title: "Warehouse" },
  { id: 8, imgpath: "/v1772309105/in-9_pwgytk.avif", title: "Pharmaceutical" },
  {
    id: 9,
    imgpath: "/v1772309106/in-10_snc0ko.avif",
    title: "Private Construction",
  },
  {
    id: 10,
    imgpath: "/v1772309105/in-11_wb2bp8.avif",
    title: "Defense System",
  },
  { id: 11, imgpath: "/v1772309105/in-12_riweu3.avif", title: "Rail Tunnels" },
  { id: 12, imgpath: "/v1772309106/in-13_vh4fkv.avif", title: "Airports" },
  { id: 13, imgpath: "/v1772309106/in-14_sdxk4b.avif", title: "Server Room" },
  {
    id: 14,
    imgpath: "/v1772309106/in-15_wa4ei1.avif",
    title: "Fashion and Luxury",
  },
];

export const IndustryMobile = () => {
  return (
    <section className={styles.app_spot_light}>
      <div className={styles.app_project_heading}>
        <span>We pride</span>
        <span>Our expertise</span>
        <span>Across industries</span>
      </div>
      <div className={styles.app_project_images}>
        {indusInfo.map((item, idx) => (
          <div key={item.id} className={styles.app_project_img}>
            <picture>
              <source
                srcSet={`${imgPath}/f_auto,q_auto,dpr_auto,w_400${item.imgpath}`}
                type="image/avif"
                media="(max-width: 640px)"
              />
              <source
                srcSet={`${imgPath}/f_auto,q_auto,dpr_auto,w_800${item.imgpath}`}
                type="image/avif"
                media="(max-width: 1280px)"
              />
              <img
                src={`${imgPath}/f_auto,q_auto,dpr_auto,w_1200${item.imgpath}`}
                alt={`Industries image ${idx + 1}`}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
              />
            </picture>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.app_line_center}></div>
      <div className={styles.app_line_top}></div>
      <div className={styles.app_line_left}></div>
      <div className={styles.app_line_left_two}></div>
    </section>
  );
};
