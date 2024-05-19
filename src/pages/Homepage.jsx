import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import InfoSection from "./InfoSection";
import Services from "./Services";
import ContactLogin from "./ContactLogin";
import WhyChooseUs from "./WhyChooseUs";
import { TestimonialsSection } from "./Testimonials";
import HowWork from "../components/HowWork";
import DownSideHero from "../components/DownSideHero";
import AboutUs from "../components/AboutUs";
import ContactUs from "./Contactus";

const Homepage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <InfoSection />
        <Services />
        <ContactLogin />
        <WhyChooseUs />
        <TestimonialsSection />
        <HowWork />
        <DownSideHero />
        <AboutUs />
        <ContactUs />
      </Layout>
    </div>
  );
};

export default Homepage;
