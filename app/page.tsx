import { Navbar } from "../components/navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import PricingSection from "../components/PricingSection";
import GallerySection from "../components/GallerySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
