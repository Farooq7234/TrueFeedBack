"use client";
import React from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const { toast } = useToast();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Feedback Culture?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of organizations already using TrueFeedBack to drive
            positive change.
          </p>
          <Button
            onClick={() =>
              toast({
                title: "Info",
                description: "Please login to start your free trial",
              })
            }
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
