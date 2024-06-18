import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
// import "./globals.css";
import "./variables.module.scss";
import logo from "../assets/lendsqr-logo.svg";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Empowering the smartest lenders",
  icons: logo,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className} id="body">
        {children}
      </body>
    </html>
  );
}
