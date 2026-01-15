import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { analytics } from '@/lib/dummyAnalytics';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small paint manufacturers',
    price: '₹15,000',
    period: '/month',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    features: [
      { name: 'Up to 50 products', included: true },
      { name: 'Order collaboration', included: true },
      { name: 'Basic formulation management', included: true },
      { name: 'Production planning', included: true },
      { name: 'Inventory tracking', included: true },
      { name: 'Basic CRM', included: true },
      { name: 'Mobile access', included: true },
      { name: 'Email support', included: true },
      { name: 'Advanced quality control', included: false },
      { name: 'Multi-location support', included: false },
      { name: 'API access', included: false },
      { name: 'Custom integrations', included: false }
    ],
    limits: {
      users: '5 users',
      storage: '10 GB storage',
      orders: '500 orders/month'
    }
  },
  {
    name: 'Professional',
    description: 'For growing paint businesses',
    price: '₹35,000',
    period: '/month',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    popular: true,
    features: [
      { name: 'Up to 200 products', included: true },
      { name: 'Advanced order collaboration', included: true },
      { name: 'Complete formulation suite', included: true },
      { name: 'Automated production planning', included: true },
      { name: 'Advanced inventory management', included: true },
      { name: 'Professional CRM', included: true },
      { name: 'Mobile & tablet access', included: true },
      { name: 'Priority email & phone support', included: true },
      { name: 'Advanced quality control', included: true },
      { name: 'Multi-location support (up to 3)', included: true },
      { name: 'API access', included: true },
      { name: 'Custom integrations', included: false }
    ],
    limits: {
      users: '20 users',
      storage: '100 GB storage',
      orders: '2,000 orders/month'
    }
  },
  {
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 'Custom',
    period: '',
    icon: Crown,
    color: 'from-amber-500 to-orange-500',
    popular: false,
    features: [
      { name: 'Unlimited products', included: true },
      { name: 'Enterprise order collaboration', included: true },
      { name: 'Advanced formulation with R&D tools', included: true },
      { name: 'AI-powered production optimization', included: true },
      { name: 'Enterprise inventory management', included: true },
      { name: 'Enterprise CRM with automation', included: true },
      { name: 'All device access', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'Advanced quality control & analytics', included: true },
      { name: 'Unlimited locations', included: true },
      { name: 'Full API access', included: true },
      { name: 'Custom integrations & development', included: true }
    ],
    limits: {
      users: 'Unlimited users',
      storage: 'Unlimited storage',
      orders: 'Unlimited orders'
    }
  }
];

function PricingCard({ plan, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
    >
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-semibold">
            Most Popular
          </Badge>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <Card className={`relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border transition-all duration-300 hover:border-slate-600 group ${plan.popular
        ? 'border-purple-500/50 shadow-lg shadow-purple-500/20 lg:scale-105'
        : 'border-slate-700/50'
        }`}>
        <CardHeader className="p-8 pb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
            <plan.icon className="w-7 h-7 text-white" />
          </div>
          <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
          <p className="text-sm text-slate-400">{plan.description}</p>

          <div className="mt-6">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              {plan.period && <span className="text-slate-400">{plan.period}</span>}
            </div>
            {plan.name !== 'Enterprise' && (
              <p className="text-xs text-slate-500 mt-2">Billed annually (save 20%)</p>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-8 pt-0">
          {/* Limits */}
          <div className="bg-slate-900/50 rounded-xl p-4 mb-6 space-y-2">
            {Object.entries(plan.limits).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-slate-400">{value.split(' ')[1]}</span>
                <span className="text-cyan-400 font-medium">{value.split(' ')[0]}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-3">
            {plan.features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 ${!feature.included ? 'opacity-40' : ''}`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${feature.included
                  ? 'bg-green-500/20 border border-green-500/30'
                  : 'bg-slate-700/30 border border-slate-600/30'
                  }`}>
                  {feature.included && <Check className="w-3 h-3 text-green-400" />}
                </div>
                <span className={`text-sm ${feature.included ? 'text-slate-300' : 'text-slate-500'}`}>
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-8 pt-0">
          <Button
            className={`w-full py-6 text-base rounded-xl transition-all duration-300 ${plan.popular
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25'
              : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}
            onClick={() => analytics.track({
              eventName: 'pricing_plan_selected',
              properties: { plan: plan.name }
            })}
          >
            {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            Flexible Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Choose the Right Plan
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              For Your Factory
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Scale as you grow. All plans include core features, cloud access, and regular updates.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Free Training', description: 'Comprehensive onboarding for your team' },
                { title: 'Regular Updates', description: 'New features at no extra cost' },
                { title: 'Data Security', description: 'Bank-grade encryption & backups' },
                { title: 'Cloud Access', description: 'Access from anywhere, anytime' },
                { title: 'Mobile Apps', description: 'iOS & Android applications' },
                { title: 'Money-Back Guarantee', description: '30-day satisfaction guarantee' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">
            Need a custom solution for your unique requirements?
          </p>
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
            onClick={() => analytics.track({
              eventName: 'pricing_custom_inquiry',
              properties: { source: 'pricing_page' }
            })}
          >
            Talk to Our Solutions Team
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}