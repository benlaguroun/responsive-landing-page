// pages/global-reach.tsx
import { FC } from "react";
import { Globe2 } from "lucide-react";
import Image from "next/image";

const GlobalReach: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <Image
          src="/images/feature-global-each.jpg"
          alt="Global Reach"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Dark overlay + Title */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold">
            Global Reach
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <main className="flex-grow bg-gray-50 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary rounded-full">
              <Globe2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-4">
            Connect Globally
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Our platform lets you reach customers around the world with ease.
            Expand your brand into new markets and scale your business
            effortlessly.
          </p>
          <p className="text-base text-gray-600 mb-8">
            With powerful localization tools, multi-language support, and 24/7
            global infrastructure, you’ll never miss an opportunity to grow.
            Join businesses everywhere who trust us to power their international
            expansion.
          </p>
          <div className="flex justify-center">
            <a
              href="/signup"
              className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GlobalReach;
