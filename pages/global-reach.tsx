// pages/global-reach.tsx
import { FC } from "react";
import { Globe2 } from "lucide-react";
import Image from "next/image";

const GlobalReach: FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen Hero Image */}
      <Image
        src="/images/feature-global-reach.jpg"
        alt="Global Reach"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay with Centered Content */}
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6">
        <div className="bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-lg max-w-2xl w-full">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary rounded-full shadow-lg">
              <Globe2 className="h-10 w-10 text-white" />
            </div>
          </div>

          <h1 className="text-white text-3xl sm:text-5xl font-extrabold mb-4">
            Global Reach
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            Reach customers around the world with powerful tools for scaling
            internationally. Go global with confidence.
          </p>

          {/* Fancy CTA Button */}
          <a
            href="/signup"
            className="inline-block bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary transition-all text-white font-semibold py-3 px-8 rounded-full shadow-xl text-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlobalReach;
