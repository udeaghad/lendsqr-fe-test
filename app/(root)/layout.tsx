import styles from "../variables.module.scss";
import NavBar from "../components/NavBar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.dashboard_layout}>
      <NavBar />
      <div className={styles.children}>{children}</div>
    </main>
  );
}
