import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topnav from "@/components/top_nav/top_nav";
import Footer from "@/components/footer/footer";
import Sidenav from "@/components/side_nav/side_nav";
import { ThemeProvider } from "@/components/themeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Weather Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <div className="flex flex-col h-screen w-full">
        <Topnav />
        <div className="flex flex-1 w-full overflow-hidden">
          <Sidenav />
          <main className="flex-2 flex flex-col w-full overflow-y-scroll mb-5">
          {children}
          </main>
        </div>
        <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}