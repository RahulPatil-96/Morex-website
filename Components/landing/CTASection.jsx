import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { analytics } from '@/lib/dummyAnalytics';

export default function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-[2.5rem] blur-2xl" />

          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-[2.5rem] p-10 md:p-16 text-center">
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed max-w-4xl mx-auto">
                "This software transforms a paint manufacturing unit into a{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  professionally managed, intelligent, and scalable
                </span>{' '}
                business."
              </blockquote>
            </motion.div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {[
                'End-to-End Control',
                'Industry-Specific',
                'Cloud-Based',
                'Mobile Ready'
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-7 text-lg rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
                onClick={() => analytics.track({ eventName: 'cta_clicked', properties: { button: 'schedule_demo', section: 'cta' } })}
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-white/5 px-10 py-7 text-lg rounded-full transition-all duration-300"
                onClick={() => analytics.track({ eventName: 'cta_clicked', properties: { button: 'contact_sales', section: 'cta' } })}
              >
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Phone, label: 'Call Us', value: '+91 98765 43210' },
            { icon: Mail, label: 'Email', value: 'info@morextech.com' },
            { icon: MapPin, label: 'Location', value: 'India' }
          ].map((contact, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
                <contact.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">{contact.label}</p>
                <p className="text-slate-300 font-medium">{contact.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}