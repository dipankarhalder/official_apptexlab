"use client";

import { useState } from "react";
import { BottomNav } from "@/components/common/bottomNav";
import styles from "@/styles/nav.module.css";

export const CorePage = ({ childData }) => {
  const [mainShifted, setMainShifted] = useState(false);

  const handleBottomNavClick = () => {
    setMainShifted((prev) => !prev);
  };

  return (
    <>
      <main>{childData}</main>
      <div className={`${styles.hiddenNav} ${mainShifted ? styles.show : ""}`}>
        sdknfsd
      </div>
      <BottomNav onClick={handleBottomNavClick} />
    </>
  );
};
