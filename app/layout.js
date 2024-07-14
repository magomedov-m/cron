import { Inter } from "next/font/google";
import "../app/reset.css";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Битрикс24",
  description: "Краткое описание сайта",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  colorScheme: "light dark",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Битрикс24",
    description: "Краткое описание сайта",
    url: "https://www.example.com",
    siteName: "Название сайта",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Описание изображения",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: "Название сайта",
    description: "Краткое описание сайта",
    images: "/twitter-image.jpg",
    creator: "@имя_твиттер_аккаунта",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
