import localFont from "next/font/local";
import { Sora } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/common/navigation";

const gilroy = localFont({
  variable: "--font-gilroy",
  src: [
    { path: "../public/fonts/Gilroy-Medium.woff2", weight: "500" },
    { path: "../public/fonts/Gilroy-SemiBold.woff2", weight: "600" },
    { path: "../public/fonts/Gilroy-Bold.woff2", weight: "700" },
  ],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Apptexlab Pvt Ltd",
  description: "Digital Transformation and Consulting Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${gilroy.variable}`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
