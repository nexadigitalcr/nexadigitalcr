
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000000" }}>
      <Hero />
      <Features />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
