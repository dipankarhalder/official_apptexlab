"use client";

import { useState, useEffect } from "react";
import { BottomNav } from "@/components/common/bottomNav";
import { HiddenNav } from "@/components/common/hiddenNav";

export const CorePage = ({ childData }) => {
  const [mainShifted, setMainShifted] = useState(false);

  useEffect(() => {
    if (mainShifted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mainShifted]);

  return (
    <>
      <main>{childData}</main>
      <HiddenNav mainShifted={mainShifted} />
      <BottomNav onClick={() => setMainShifted((prev) => !prev)} />
    </>
  );
};
