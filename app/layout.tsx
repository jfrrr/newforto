import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import PixelBlast from "./components/PixelBlast/PixelBlast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Maulana Jafar Sidiq | Portfolio",
  description: "Front-End Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        {/* 🌈 Background global */}
        <div className="fixed inset-0 -z-10 w-full h-full min-h-screen">
          <PixelBlast
            variant="circle"
            pixelSize={5}
            color="#8DD3D1"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>

        {/* 🧭 Navbar */}
        <Navbar />

        {/* 🧱 Konten utama */}
        <main className="pt-16 relative z-10">{children}</main>
      </body>
    </html>
  );
}
