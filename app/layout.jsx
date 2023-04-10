import { Poppins } from "next/font/google";
import Header from "./components/Header";

import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "next-13 with github api",
  description: "app with next-13 new features and app dir",
  keywords: "next-13, api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
