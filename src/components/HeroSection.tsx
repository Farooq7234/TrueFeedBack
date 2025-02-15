import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Collect Anonymous Feedback{" "}
            <span className="text-foreground">That Matters</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-6">
            Create a safe space for honest feedback. Build trust and improve
            through anonymous insights.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              <Link href={"/sign-in"}>Get Started Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
