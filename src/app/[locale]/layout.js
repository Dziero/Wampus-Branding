import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import config from "@/lib/config";
import {NextIntlClientProvider} from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.page_title,
  description: config.page_description,
};

export default async function LocaleLayout({ children, params: {locale} }) {
  const messages = await getMessages();
  return (
    <html lang={ locale }>
    <body className={ inter.className }>
      <NextIntlClientProvider messages={ messages }>
        { children }
      </NextIntlClientProvider>
    </body>
  </html>
  );
}