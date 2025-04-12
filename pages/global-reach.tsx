// pages/global-reach.tsx
import { FC } from "react";
import { Globe2 } from "lucide-react";

const GlobalReach: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-12">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl max-w-xl w-full p-8 sm:p-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary rounded-full shadow-md">
            <Globe2 className="h-10 w-10 text-white" />
          </div>
        </div>

        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
          Global Reach
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
          Reach customers around the world with powerful tools for scaling
          internationally. Go global with confidence and simplicity.
        </p>

        <a
          href="/signup"
          className="inline-block bg-primary hover:bg-primary/90 transition-colors text-white font-medium py-3 px-6 rounded-full text-lg shadow-md"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default GlobalReach;
