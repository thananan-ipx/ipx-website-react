
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
// import Team from "@/components/home/Team";
import Contact from "@/components/home/Contact";
import Tools from "@/components/home/Tools";
import Mission from "@/components/home/Mission";
import { usePrelineInit } from "@/utils/prelineInit";

const Index = () => {
  // Initialize Preline
  usePrelineInit();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "I Progress X Co., Ltd. | Software Development Company";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero />
        <div className="animate-on-scroll">
          <About />
        </div>
        <div className="animate-on-scroll">
          <Services />
        </div>
        <div className="animate-on-scroll">
          <Portfolio />
        </div>
        {/* <div className="animate-on-scroll">
          <Team />
        </div> */}
        <div className="animate-on-scroll">
          <Mission />
        </div>
        <div className="animate-on-scroll">
          <Tools />
        </div>
        <div className="animate-on-scroll">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
