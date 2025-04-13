import { Feature } from "../types";
import FeatureCard from "./FeatureCard";
import { Globe2, Zap, CheckCircle2 } from "lucide-react";

const features: Feature[] = [
  {
    title: "Global Reach",
    description:
      "Connect with customers worldwide through our powerful platform.",
    icon: Globe2,
    link: "/global-reach",
  },
  {
    title: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized infrastructure.",
    icon: Zap,
    link: "/lightning-fast",
  },
  {
    title: "Reliable Service",
    description:
      "Count on our 99.9% uptime guarantee and dedicated support team.",
    icon: CheckCircle2,
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
        <dl className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center justify-between p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <feature.icon className="h-12 w-12 text-black mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
              <a
                href={feature.link}
                className="mt-6 inline-block bg-black text-white py-2 px-6 rounded-full text-lg hover:bg-gray-800 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
