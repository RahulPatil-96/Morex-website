import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import {
  MousePointerClick,
  Building2,
  Users,
  FileText,
  Eye,
  Factory,
  Calculator,
  ShieldCheck,
  Beaker,
  TrendingUp,
  Layers,
  Globe,
  Package,
  Truck,
  BarChart3,
  Palette
} from 'lucide-react';

const features = [
  {
    number: '1',
    title: 'One-Click Order Collaboration',
    feature: 'Orders from all customers and dealers are automatically combined at one click.',
    advantages: [
      'No manual addition of quantities',
      'No missed or duplicate orders',
      'Production manager instantly sees total quantity to produce'
    ],
    highlight: 'What earlier took hours now happens in seconds.',
    icon: MousePointerClick
  },
  {
    number: '2',
    title: 'End-to-End Business Control',
    feature: 'Single system manages CRM, quotation, order tracking, production, dispatch, inventory, and formulation.',
    advantages: [
      'No data loss between departments',
      'Everyone works on the same live information',
      'Factory runs smoothly even without owner\'s physical presence'
    ],
    highlight: 'One system. One source of truth.',
    icon: Building2
  },
  {
    number: '3',
    title: 'Strong CRM for Consistent Sales',
    feature: 'Every customer conversation and update is recorded. Follow-up reminders and notifications are automatic.',
    advantages: [
      'No customer is forgotten',
      'Sales follow-ups become systematic',
      'Repeat orders increase naturally'
    ],
    highlight: 'Sales driven by system, not memory.',
    icon: Users
  },
  {
    number: '4',
    title: 'Professional Quotation Management',
    feature: 'One-click PDF quotation. Customized payment and delivery terms per customer. Rate approval workflow through accounts department.',
    advantages: [
      'Professional brand image',
      'Zero rate confusion or disputes',
      'Faster decision-making by customers'
    ],
    highlight: 'Your quotation reflects your professionalism.',
    icon: FileText
  },
  {
    number: '5',
    title: 'Real-Time Order Status Visibility',
    feature: 'Live order status tracking at every stage: Accepted, Accounts cleared, Production accepted, Waiting for dispatch, Dispatched.',
    advantages: [
      'No internal follow-ups or phone calls',
      'Clear commitments to customers',
      'Better coordination between departments'
    ],
    highlight: 'Everyone knows exactly where the order stands.',
    icon: Eye
  },
  {
    number: '6',
    title: 'Automated Production Planning',
    feature: 'Orders are automatically sorted product-wise. Combined order chart generated instantly. Batch charts created at one click.',
    advantages: [
      'Clear production targets',
      'No under-production or over-production',
      'Improved labour efficiency'
    ],
    highlight: 'Production becomes predictable and controlled.',
    icon: Factory
  },
  {
    number: '7',
    title: 'Error-Free Batch Calculation',
    feature: 'Automatic raw material calculation for each batch. Perfect scaling for any batch size.',
    advantages: [
      'Eliminates manual calculation errors',
      'Prevents raw material mismatch',
      'Ensures consistent batch quality'
    ],
    highlight: 'Consistency without calculation stress.',
    icon: Calculator
  },
  {
    number: '8',
    title: 'Built-In Quality Control',
    feature: 'Density and viscosity recorded for every batch. Compared with reference values.',
    advantages: [
      'Manufacturing deviations identified immediately',
      'Quality remains consistent',
      'Customer complaints reduce'
    ],
    highlight: 'Quality control becomes automatic.',
    icon: ShieldCheck
  },
  {
    number: '9',
    title: 'Advanced Formulation Intelligence',
    feature: 'Master formulations maintained for every product. Instant visibility of Density, Solids by Weight, Solids by Volume, SVR, PVC & CPVC.',
    advantages: [
      'Understand paint behavior before manufacturing',
      'Scientific decision-making instead of trial-and-error'
    ],
    highlight: 'You design paint with confidence.',
    icon: Beaker
  },
  {
    number: '10',
    title: 'Formulation Optimization & Cost Control',
    feature: 'Instant check of resin/binder sufficiency. Digital formulation optimization tools.',
    advantages: [
      'Reduced wastage',
      'Better performance tuning',
      'Faster product improvement cycles'
    ],
    highlight: 'Smarter formulation, better margins.',
    icon: TrendingUp
  },
  {
    number: '11',
    title: 'Advanced 2K Product Development',
    feature: 'Dedicated tools for 2K formulations. Automatic calculation of technical parameters.',
    advantages: [
      'Easier development of high-performance coatings',
      'Entry into advanced industrial segments',
      'Reduced dependency on repeated trials'
    ],
    highlight: 'Advanced products made simple.',
    icon: Layers
  },
  {
    number: '12',
    title: 'Manage Your Factory From Anywhere',
    feature: 'Mobile and cloud-based access. Remote approval and formulation updates.',
    advantages: [
      'Owner freedom',
      'Faster decisions',
      'Business continuity even during travel'
    ],
    highlight: 'Your factory works even when you\'re away.',
    icon: Globe
  },
  {
    number: '13',
    title: 'Complete Inventory Transparency',
    feature: 'Automatic raw material deduction from BOM. Finished goods stock creation. Full traceability of raw and packing materials.',
    advantages: [
      'Inventory leakage eliminated',
      'Accurate stock visibility',
      'Better purchase planning'
    ],
    highlight: 'Inventory stays under control.',
    icon: Package
  },
  {
    number: '14',
    title: 'Smart Dispatch Management',
    feature: 'Vehicle load capacity recorded. Load optimization during dispatch.',
    advantages: [
      'Reduced transport wastage',
      'Efficient logistics planning',
      'Faster dispatch cycles'
    ],
    highlight: 'Every dispatch becomes optimized.',
    icon: Truck
  },
  {
    number: '15',
    title: 'Sales & Marketing Intelligence',
    feature: 'Sales tracking person-wise and customer-wise. Month-wise purchase analysis. Identification of inactive customers. Birthday reminders for customers and employees.',
    advantages: [
      'Targeted follow-ups',
      'Stronger customer relationships',
      'Motivated sales teams'
    ],
    highlight: 'Marketing decisions backed by data.',
    icon: BarChart3
  },
  {
    number: '16',
    title: 'Built Exclusively for Paint Manufacturers',
    feature: 'Designed around real paint factory workflows.',
    advantages: [
      'Easy adoption by staff',
      'No unnecessary features',
      'Practical and industry-focused'
    ],
    highlight: 'This software speaks the language of paint manufacturers.',
    icon: Palette
  }
];

export default function FeatureSection() {
  return (
    <section className="relative py-32 bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            Comprehensive Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Run Your Paint Factory
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            16 powerful features designed specifically for paint manufacturers,
            working together seamlessly in one integrated system.
          </p>
        </motion.div>

        {/* Features marquee */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] -mx-6 md:mx-0 py-10 group">
          <div
            className="flex gap-6 lg:gap-8 flex-nowrap animate-marquee group-hover:[animation-play-state:paused]"
          >
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="min-w-[320px] md:min-w-[400px] flex-shrink-0 h-full">
                <FeatureCard
                  feature={feature}
                  index={0}
                  icon={feature.icon}
                  disableAnimation={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}