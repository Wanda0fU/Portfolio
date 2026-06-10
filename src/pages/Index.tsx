import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutBentoGrid } from "../components/AboutBentoGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutBentoGrid />
      </main>
    </div>
  );
};

export default Index;
