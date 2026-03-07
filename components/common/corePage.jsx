"use client";

import { useState, useEffect } from "react";
import useMediaQuery from "@/components/hooks/useMediaQuery";

import { Navigation } from "@/components/common/desk/navigation";
import { BottomNav } from "@/components/common/desk/bottomNav";
import { HiddenNav } from "@/components/common/desk/hiddenNav";

import { MobileHeader } from "@/components/common/mobile/mobileHeader";

export const CorePage = ({ childData }) => {
  const isMobile = useMediaQuery("(max-width: 769px)");
  const [mainShifted, setMainShifted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mainShifted ? "hidden" : "auto";
  }, [mainShifted]);

  if (isMobile === null) return null;

  return (
    <>
      {isMobile ? <MobileHeader /> : <Navigation />}
      <main>{childData}</main>
      <HiddenNav mainShifted={mainShifted} />
      <BottomNav onClick={() => setMainShifted((prev) => !prev)} />
    </>
  );
};
