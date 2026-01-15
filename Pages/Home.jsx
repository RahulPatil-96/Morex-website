import React from 'react';
import Navbar from '../Components/landing/Navbar';
import Hero from '../Components/landing/Hero';
import FeatureSection from '../Components/landing/FeatureSection';
import InteractiveDemo from '../Components/landing/InteractiveDemo';
import Testimonials from '../Components/landing/Testimonials';
import Pricing from '../Components/landing/Pricing';
import FAQ from '../Components/landing/FQA';
import CTASection from '../Components/landing/CTASection';
import Footer from '../Components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <FeatureSection />
      <InteractiveDemo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}