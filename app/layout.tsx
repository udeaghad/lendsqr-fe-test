import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Providers from "./Providers";
import styles from "./variables.module.scss";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Empowering the smartest lenders",
  icons: "/assets/logo1.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <CustomProvider>
          <Providers>{children}</Providers>
        </CustomProvider>
      </body>
    </html>
  );
}
