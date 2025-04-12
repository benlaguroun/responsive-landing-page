import { Navbar } from "../components/navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection"; // Example of another component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
