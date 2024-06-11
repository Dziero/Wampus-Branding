import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import config from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.page_title,
  description: config.page_description,
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={ params.locale }>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
