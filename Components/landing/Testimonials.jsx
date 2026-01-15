import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/dummyAnalytics';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'Managing Director',
    company: 'Supreme Paints Ltd',
    logo: '🎨',
    quote: 'Morex Technologies has completely transformed how we run our factory. What used to take our team hours of manual work now happens in seconds. The order collaboration feature alone has saved us countless hours every week.',
    rating: 5,
    highlight: 'Saved 15+ hours per week'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Production Manager',
    company: 'ColorTech Industries',
    logo: '🏭',
    quote: 'The formulation management system is a game-changer. We\'ve eliminated calculation errors completely, and our quality consistency has improved dramatically. Our customers have noticed the difference.',
    rating: 5,
    highlight: 'Zero formulation errors'
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Owner',
    company: 'Elite Coatings Pvt Ltd',
    logo: '🖌️',
    quote: 'I can now manage my factory from anywhere. The mobile access and real-time visibility give me complete control even when I\'m traveling. It\'s like having a virtual manager that never sleeps.',
    rating: 5,
    highlight: 'Complete remote control'
  },
  {
    id: 4,
    name: 'Sunita Desai',
    position: 'Sales Head',
    company: 'Rainbow Paints',
    logo: '🌈',
    quote: 'The CRM and quotation system has professionalized our entire sales process. We never miss follow-ups anymore, and our quotations look incredibly professional. Customer conversion has increased by 40%.',
    rating: 5,
    highlight: '40% increase in conversions'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    position: 'Factory Manager',
    company: 'Premium Coating Solutions',
    logo: '⚡',
    quote: 'Production planning used to be a nightmare with spreadsheets everywhere. Now everything is automated and accurate. Our production efficiency has improved by 60% since implementing Morex.',
    rating: 5,
    highlight: '60% efficiency improvement'
  },
  {
    id: 6,
    name: 'Meera Reddy',
    position: 'Quality Head',
    company: 'UltraTech Paints',
    logo: '✨',
    quote: 'The built-in quality control features have made our QC process so much more systematic. We catch deviations immediately, and our batch consistency has never been better. Customer complaints have dropped to almost zero.',
    rating: 5,
    highlight: 'Near-zero complaints'
  }
];

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />

      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
        {/* Quote icon */}
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 rotate-12">
          <Quote className="w-8 h-8 text-white" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Highlight badge */}
        <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8">
          ✓ {testimonial.highlight}
        </div>

        {/* Author info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-3xl">
            {testimonial.logo}
          </div>
          <div>
            <div className="text-white font-semibold text-lg">{testimonial.name}</div>
            <div className="text-slate-400 text-sm">{testimonial.position}</div>
            <div className="text-cyan-400 text-sm font-medium">{testimonial.company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handlePrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    analytics.track({ eventName: 'testimonial_navigation', properties: { action: 'previous' } });
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    analytics.track({ eventName: 'testimonial_navigation', properties: { action: 'next' } });
  };

  const handleDotClick = (index) => {
    setAutoPlay(false);
    setCurrentIndex(index);
    analytics.track({ eventName: 'testimonial_view', properties: { testimonial: testimonials[index].company } });
  };

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            Customer Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by Leading
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Paint Manufacturers
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See what industry leaders are saying about how Morex Technologies
            has transformed their operations
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${index === currentIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-blue-500 to-cyan-500'
                      : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '200+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '10M+', label: 'Litres Managed' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}