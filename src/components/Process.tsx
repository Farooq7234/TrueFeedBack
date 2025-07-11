"use client";
import { Lock, Send, EyeOff } from "lucide-react";
import { motion } from "motion/react";
import { TextAnimate } from "./magicui/text-animate";

const Process = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <TextAnimate className="text-2xl sm:text-3xl font-bold text-center mb-12">
          How Anonymous Feedback Works
        </TextAnimate>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: EyeOff,
              title: "Submit Feedback",
              description:
                "Users provide feedback without revealing their identity, ensuring complete anonymity.",
            },
            {
              icon: Lock,
              title: "Secure Encryption",
              description:
                "Feedback is encrypted and stored securely, preventing any unauthorized access.",
            },
            {
              icon: Send,
              title: "Review & Act",
              description:
                "The recipient reviews feedback and takes necessary actions while maintaining confidentiality.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-8 bg-background rounded-lg border hover:shadow-lg transition-shadow"
            >
              <step.icon className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
