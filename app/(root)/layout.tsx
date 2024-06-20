import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      <SideBar />
      {children}
    </main>
  );
}
