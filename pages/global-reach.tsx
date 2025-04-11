import { FC } from "react";
import { Globe2 } from "lucide-react";

const GlobalReach: FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Global Reach</h1>
        <p className="mt-4 text-lg text-gray-600">
          Connect with customers worldwide through our powerful platform.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-full sm:w-96">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary rounded-full">
              <Globe2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-900">
            Expand your reach globally
          </h3>
          <p className="mt-4 text-base text-gray-600">
            Our platform allows you to connect with customers all over the
            world, expanding your brand and reaching new markets. With our
            advanced tools and features, you can easily scale your business and
            make a global impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalReach;
