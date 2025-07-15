import { Unbounded, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar2 } from "./home/components/Navbar2";
import { Footer2 } from "./home/components/Footer2";
import { TwentyFirstToolbar } from "@21st-extension/toolbar-next";
import { ViewTransitions } from "next-view-transitions";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-unbounded",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "GlowSketch - Collaborative Digital Art Platform",
  description:
    "Unleash your imagination and collaborate with artists worldwide. Create stunning digital murals in real-time and bring your visions to life.",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
    <html lang="en" className={`${unbounded.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <TwentyFirstToolbar />
        <Navbar2 />
        {children}
        <Footer2 />
      </body>
    </html>
    </ViewTransitions>
  );
}
