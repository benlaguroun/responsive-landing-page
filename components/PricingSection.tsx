// components/PricingSection.tsx
import { FC } from "react";

const plans = [
  {
    title: "Basic",
    price: "$0",
    features: ["Access to core features", "Community support", "Single user"],
  },
  {
    title: "Pro",
    price: "$29/mo",
    features: [
      "Everything in Basic",
      "Advanced analytics",
      "Priority support",
      "Up to 5 users",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "Unlimited users",
    ],
  },
];

const PricingSection: FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Pricing Plans
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Choose the plan that fits your needs.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white dark:bg-gray-800 border-2 border-primary scale-105"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {plan.title}
              </h3>
              <p className="text-3xl font-extrabold text-primary mt-4">
                {plan.price}
              </p>
              <ul className="mt-6 text-left space-y-3 text-gray-700 dark:text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition">
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
