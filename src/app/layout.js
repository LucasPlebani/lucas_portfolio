import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../components/style/common.css";
import "../components/style/blobs.css";
import "../components/style/Nav.css";
import "../components/style/Hero.css";
import "../components/style/StatCard.css";
import "../components/style/Projects.css";
import "../components/style/StackCard.css";
import "../components/style/NowCard.css";
import "../components/style/Formations.css";
import "../components/style/SoftSkills.css";
import "../components/style/Contact.css";
import "../components/style/Footer.css";
import "../components/style/Icon.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Portfolio de Lucas Plebani - Développeur Full Stack",
  description: "Découvrez le portfolio de Lucas Plebani, développeur Full Stack passionné par la création de solutions web performantes. Explorez ses projets, compétences et expériences dans le développement web, avec une expertise en React, Next.js et Node.js. Basé à Montpellier, Lucas est ouvert aux opportunités professionnelles et à la collaboration sur des projets innovants.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Optimisations de connexion */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
