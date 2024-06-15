"use client";

import HeaderBuilder from "@/components/HeaderBuilder";
import WelcomePage from "@/components/WelcomePage";
import ShowcaseSection from "@/components/ShowcaseSection";
import LineHorizontal from "@/components/Appearance/LineHorizontal";
import ServiceHighlights from "@/components/ServiceHightlits";
import FooterBuilder from "@/components/FooterBuilder";
import ContactForm from "@/components/ContactForm";
import { useEffect } from "react";
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Separators');

  useEffect(() => {
    const preventSelection = (event) => {
      event.preventDefault();
    };

    document.addEventListener('selectstart', preventSelection);

    return () => {
      document.removeEventListener('selectstart', preventSelection);
    };
  }, []);
  
  return (
    <main className="h-screen">
      <HeaderBuilder />
      <WelcomePage />
      <LineHorizontal text={ t('WhyChooseUsOverOthers') }/>
      <ServiceHighlights />  
      <LineHorizontal text={ t('ProjectShowcase') }/>
      <ShowcaseSection />
      <ContactForm />
      
      <FooterBuilder />

    </main>
  );
}
