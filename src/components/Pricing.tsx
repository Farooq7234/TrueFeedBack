import { Users } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Pricing = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              price: "$0",
              features: [
                "Up to 10 team members",
                "Basic analytics",
                "Email support",
              ],
              highlighted: false,
            },
            {
              name: "Pro",
              price: "$29",
              features: [
                "Up to 50 team members",
                "Advanced analytics",
                "Priority support",
                "Custom branding",
              ],
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: [
                "Unlimited team members",
                "Enterprise analytics",
                "24/7 support",
                "Custom integration",
              ],
              highlighted: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-lg ${
                plan.highlighted
                  ? "bg-foreground text-background scale-105"
                  : "bg-background border"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : ""
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
