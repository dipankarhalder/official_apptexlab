"use client";

import useMediaQuery from "@/components/hooks/useMediaQuery";
import { HomeDesk } from "@/components/home/homeDesk";
import { HomeMobile } from "@/components/home/homeMobile";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 769px)");
  if (isMobile === null) return null;

  return isMobile ? <HomeMobile /> : <HomeDesk />;
}
