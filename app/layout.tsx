"use client";
import "./globals.css";
import Navbar from "./components/Nav/Navbar";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react"
import Footer from "./components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  return (
    <ReactLenis root>
    <html lang="en" suppressHydrationWarning data-page={isAboutPage ? 'about' : undefined}>
        <body>
          <Navbar />
          <main className={`mx-auto ${isAboutPage ? 'w-full' : 'w-11/12'}`}>{children}</main>
          {isAboutPage && <div className="w-11/12 mx-auto pt-6"><Footer /></div>}
        </body>
    </html>
    </ReactLenis>
  );
}
