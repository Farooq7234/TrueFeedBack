import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
import ScrollProgress from "@/components/ScrollProgress";
import { AnimatedList } from "@/components/magicui/animated-list";
import { AnimatedListDemo } from "@/components/AnimatedList";

export default function Home() {


  return (
    <>
      <ScrollProgress />

      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <Process />
      {/* Featured Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-40 px-4 py-10 overflow
      ">
        <div className="w-full max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            See True Feedback in Action
          </h2>
          <p className="text-base md:text-lg text-gray-500 text-center">
            True Feedback is a powerful tool that helps you collect and analyze feedback from your users.
          </p>
        </div>
        <div className="w-full max-w-md">
          <AnimatedListDemo />
        </div>
      </div>


      {/* Testimonials Section */}
      <InfiniteMovingCardsDemo />

      {/* Pricing Section */}
      <Pricing />
      {/* Call to Action */}
      <CallToAction />
      {/* Footer */}
      <Footer />
      <SmoothCursor />
    </>
  );
}
