import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Abstractly",
  description: "Well crafted abstract images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} min-h-screen bg-gradient-to-br from-gray-50 to-[#d2d6db] p-4`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
