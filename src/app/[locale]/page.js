import HeaderBuilder from "@/components/HeaderBuilder";
import WelcomePage from "@/components/WelcomePage";
import ShowcaseSection from "@/components/ShowcaseSection";
import LineHorizontal from "@/components/Appearance/LineHorizontal";
import ServiceHighlights from "@/components/ServiceHightlits";
import FooterBuilder from "@/components/FooterBuilder";

export default function Home() {
  return (
    <main className="h-screen">
      <HeaderBuilder />
      <WelcomePage />
      <LineHorizontal text="Why Choose Us Over Others?"/>
      <ServiceHighlights />  
      <LineHorizontal text="Project Showcase"/>
      <ShowcaseSection />
      <FooterBuilder />
    </main>
  );
}
