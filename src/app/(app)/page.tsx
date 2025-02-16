import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
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
