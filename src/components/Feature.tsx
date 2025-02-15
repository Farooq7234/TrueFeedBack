import { Target, Shield, Zap } from "lucide-react";

const Feature = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Why Choose FeedbackFlow?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Shield,
              title: "Complete Anonymity",
              description:
                "Advanced encryption ensures feedback providers remain completely anonymous.",
            },
            {
              icon: Zap,
              title: "Real-time Insights",
              description:
                "Get instant notifications and analyze feedback patterns in real-time.",
            },
            {
              icon: Target,
              title: "Actionable Results",
              description:
                "Transform feedback into concrete action items with our AI-powered suggestions.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-lg border hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
