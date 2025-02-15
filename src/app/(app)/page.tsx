import CallToAction from "@/components/CallToAction";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <Feature />
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
