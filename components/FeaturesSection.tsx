// components/FeaturesSection.tsx
import { Feature } from "@/types";
import FeatureCard from "./FeatureCard"; // Import the FeatureCard component
import { Globe2, Zap, CheckCircle2 } from "lucide-react";

const features: Feature[] = [
  {
    title: "Global Reach",
    description:
      "Connect with customers worldwide through our powerful platform.",
    icon: Globe2,
    bgImage: "/images/feature-global-reach.jpg",
    link: "/global-reach",
  },
  {
    title: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized infrastructure.",
    icon: Zap,
    bgImage: "/images/feature-lightning-fast.jpg",
    link: "/lightning-fast",
  },
  {
    title: "Reliable Service",
    description:
      "Count on our 99.9% uptime guarantee and dedicated support team.",
    icon: CheckCircle2,
    bgImage: "/images/feature-reliable-service.jpg",
    link: "/reliable-service",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Everything you need to succeed
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Our platform provides all the tools and features you need to build and
          grow your business.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <FeatureCard feature={feature} /> {/* Use FeatureCard here */}
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
