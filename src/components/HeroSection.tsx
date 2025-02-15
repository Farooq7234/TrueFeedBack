import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AuroraText } from "./magicui/aurora-text";

const HeroSection = () => {
  return (
    <div className="relative bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_28px] ">
      {" "}
      <section className=" min-h-screen flex justify-center items-center z-10 ">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Collect Anonymous Feedback <AuroraText>That Matters</AuroraText>
            </h1>
            <p className="text-lg text-muted-foreground mt-6">
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
    </div>
  );
};

export default HeroSection;
