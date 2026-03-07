import { IntroMobile } from "@/components/home/mobile/introMobile";
import { MobileBanners } from "@/components/home/mobile/mobileBanners";
import { MainLink } from "@/components/home/desk/mainLink";
import { IndustryMobile } from "@/components/home/mobile/industryMobile";

export const HomeMobile = () => {
  return (
    <>
      <IntroMobile />
      <MobileBanners />
      <MainLink />
      <IndustryMobile />
    </>
  );
};
