// components/FeatureCard.tsx
import Link from "next/link";
import { FC } from "react";
import { Feature } from "../types";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: FC<FeatureCardProps> = ({ feature }) => (
  <Link href={feature.link} passHref>
    <div>
      <div className="flex flex-col items-center justify-center p-6 bg-opacity-50 bg-black rounded-lg">
        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
        <p className="mt-2 text-base text-white">{feature.description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-lg" />
    </div>
  </Link>
);

export default FeatureCard;
