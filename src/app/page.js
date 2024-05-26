import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import HeaderLine from "@/components/HeaderLine";

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <Header />
        <MainSection />
        <HeaderLine text="Why Choose Us Over Others?"/>
      </div>
    </main>
  );
}
