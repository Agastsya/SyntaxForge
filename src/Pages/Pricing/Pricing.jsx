import React from "react";

// Updated Pricing component for dark editor project
export default function Pricing() {
  return (
    <>
      {/* Container for pricing cards */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 p-8 w-full h-screen bg-black">
        {PRICING_DATA.map((plan, idx) => (
          <div
            key={idx}
            className="max-w-sm w-full bg-gray-800 text-white rounded-2xl p-6 border border-gray-700 hover:shadow-lg hover:scale-105 transform transition"
          >
            <div className="flex items-center gap-4 mb-4">
              {plan.iconComponent}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
            </div>

            <p className="text-gray-400 mb-4">{plan.tagline}</p>

            <ul className="space-y-2 mb-6">
              {plan.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <RightIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-700 pt-4">
              <div className="mb-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              <button className="w-full py-2 bg-gray-600 rounded-md font-semibold hover:bg-purple-500 transition">
                Choose {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// Example icons (reuse or swap as needed)
const RightIcon = () => (
  <svg className="w-5 h-5 fill-current text-green-400" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 11-0.001 20.001A10 10 0 0110 0zm1 14l5-5-1.414-1.414L11 11.172l-2.586-2.586L7 10l4 4z" />
  </svg>
);

// Updated data for the plans
const PRICING_DATA = [
  {
    name: "Starter",
    tagline: "Great for small projects and experimentation",
    price: "₹0",
    period: "forever",
    iconComponent: <RightIcon />,
    // Crossed-out features to highlight Premium/Enterprise benefits
    benefits: [
      "Unlimited code edits",
      <span key="gen" className="line-through text-gray-500">
        50 AI generations per minute
      </span>,
      <span key="support" className="line-through text-gray-500">
        Priority email support
      </span>,
      "Basic AI suggestions",
      "Community support",
    ],
  },
  {
    name: "Premium",
    tagline: "Affordable access for regular use",
    price: "₹415",
    period: "month",
    iconComponent: <RightIcon />,
    benefits: [
      "Unlimited code edits",
      "50 AI generations per minute",
      "Priority email support",
      "Collaboration features",
      "Team access",
      "Custom themes",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Custom solutions for large organizations",
    price: "₹3000",
    period: "month",
    iconComponent: <RightIcon />,
    benefits: [
      "Unlimited code edits",
      "Unlimited AI usage",
      "Dedicated account manager",
      "50 AI generations per minute",
      "Organisation access",
      "24/7 premium support",
      "Dedicated onboarding",
    ],
  },
];
