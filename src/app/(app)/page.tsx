"use client";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import Process from "@/components/Process";
import { motion, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <>
     <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    zIndex: 9999,
                    maxHeight: 3,
                    backgroundColor: "#ff0088",
                }}
            />
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <Process />
      {/* Social Proof Section */}
      <SocialProof />
      {/* Pricing Section */}
      <Pricing />
      {/* Call to Action */}
      <CallToAction />
      {/* Footer */}
      <Footer />
    </>
  );
}
