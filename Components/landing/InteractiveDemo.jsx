import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/dummyAnalytics';
import {
  MousePointerClick,
  Factory,
  Beaker,
  CheckCircle2,
  Clock,
  ArrowRight,
  Users,
  Package,
  TrendingUp
} from 'lucide-react';

const demoSteps = [
  {
    id: 'orders',
    title: 'Order Collaboration',
    subtitle: 'Combine all orders with one click',
    icon: MousePointerClick,
    color: 'from-blue-500 to-cyan-500',
    demo: {
      before: [
        { customer: 'ABC Paints Ltd', product: 'White Emulsion', qty: 500 },
        { customer: 'XYZ Dealers', product: 'White Emulsion', qty: 300 },
        { customer: 'PQR Industries', product: 'White Emulsion', qty: 200 },
        { customer: 'LMN Corp', product: 'Red Oxide', qty: 150 }
      ],
      after: [
        { product: 'White Emulsion', totalQty: 1000, orders: 3 },
        { product: 'Red Oxide', totalQty: 150, orders: 1 }
      ]
    }
  },
  {
    id: 'production',
    title: 'Production Planning',
    subtitle: 'Auto-generate batch charts instantly',
    icon: Factory,
    color: 'from-purple-500 to-pink-500',
    demo: {
      products: [
        { name: 'White Emulsion', required: 1000, batchSize: 250, batches: 4, status: 'ready' },
        { name: 'Red Oxide', required: 150, batchSize: 150, batches: 1, status: 'ready' }
      ]
    }
  },
  {
    id: 'formulation',
    title: 'Formulation Management',
    subtitle: 'Automatic calculations with zero errors',
    icon: Beaker,
    color: 'from-green-500 to-emerald-500',
    demo: {
      formula: {
        name: 'Premium White Emulsion',
        batchSize: 250,
        ingredients: [
          { name: 'Titanium Dioxide', percentage: 18, weight: 45 },
          { name: 'Acrylic Binder', percentage: 25, weight: 62.5 },
          { name: 'Water', percentage: 40, weight: 100 },
          { name: 'Additives', percentage: 17, weight: 42.5 }
        ],
        properties: {
          density: '1.35 g/cm³',
          viscosity: '105 KU',
          solids: '48%'
        }
      }
    }
  }
];

function OrderCollabDemo({ data, isProcessed }) {
  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        {!isProcessed ? (
          <motion.div
            key="before"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-2"
          >
            <p className="text-sm text-slate-400 mb-3">Individual Orders (Manual Processing)</p>
            {data.before.map((order, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 flex justify-between items-center">
                <div>
                  <p className="text-white text-sm font-medium">{order.customer}</p>
                  <p className="text-slate-400 text-xs">{order.product}</p>
                </div>
                <div className="text-cyan-400 font-semibold">{order.qty}L</div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="after"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-2"
          >
            <p className="text-sm text-slate-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Combined Orders (One Click)
            </p>
            {data.after.map((order, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-lg p-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-semibold">{order.product}</p>
                    <p className="text-slate-400 text-xs">{order.orders} orders combined</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{order.totalQty}L</div>
                    <div className="text-xs text-slate-400">Total Required</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductionPlanDemo({ data }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-400 mb-3">Auto-Generated Production Schedule</p>
      {data.products.map((product, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.15 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-4"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="text-white font-semibold">{product.name}</h4>
              <p className="text-slate-400 text-xs">Required: {product.required}L</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs">
              Ready to Produce
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{product.batches}</div>
              <div className="text-xs text-slate-400">Batches</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{product.batchSize}L</div>
              <div className="text-xs text-slate-400">Per Batch</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{product.required}L</div>
              <div className="text-xs text-slate-400">Total</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function FormulationDemo({ data }) {
  return (
    <div className="space-y-4">
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
        <h4 className="text-white font-semibold mb-1">{data.formula.name}</h4>
        <p className="text-slate-400 text-sm mb-4">Batch Size: {data.formula.batchSize}kg</p>

        <div className="space-y-2 mb-4">
          {data.formula.ingredients.map((ing, idx) => (
            <motion.div
              key={idx}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">{ing.name}</span>
                <span className="text-cyan-400 font-mono">{ing.weight}kg</span>
              </div>
              <div className="w-full bg-slate-700/30 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${ing.percentage * 4}%` }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-700">
          {Object.entries(data.formula.properties).map(([key, value], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 + 0.5 }}
              className="text-center"
            >
              <div className="text-xs text-slate-500 uppercase">{key}</div>
              <div className="text-sm font-semibold text-green-400">{value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InteractiveDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isProcessed, setIsProcessed] = useState(false);

  const handleStepChange = (index) => {
    setActiveStep(index);
    setIsProcessed(false);
    analytics.track({
      eventName: 'demo_step_changed',
      properties: { step: demoSteps[index].id }
    });
  };

  const handleProcess = () => {
    setIsProcessed(true);
    analytics.track({
      eventName: 'demo_interaction',
      properties: { action: 'combine_orders' }
    });
  };

  const currentStep = demoSteps[activeStep];

  return (
    <section id="demo" className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
            Interactive Demo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Experience how Morex Technologies streamlines your paint manufacturing workflow
          </p>
        </motion.div>

        {/* Demo Container */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Step Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {demoSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepChange(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activeStep === index
                  ? 'bg-slate-800 border-slate-600 shadow-lg'
                  : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50'
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.subtitle}</p>
                  </div>
                  {activeStep === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 rounded-full bg-cyan-400"
                    />
                  )}
                </div>
              </button>
            ))}
          </motion.div>

          {/* Demo Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {currentStep.title}
                  </h3>
                  <p className="text-sm text-slate-400">{currentStep.subtitle}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentStep.color} flex items-center justify-center`}>
                  <currentStep.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {currentStep.id === 'orders' && (
                      <>
                        <OrderCollabDemo data={currentStep.demo} isProcessed={isProcessed} />
                        {!isProcessed && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6"
                          >
                            <Button
                              onClick={handleProcess}
                              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 text-lg rounded-xl"
                            >
                              <MousePointerClick className="w-5 h-5 mr-2" />
                              Combine All Orders (One Click)
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                          </motion.div>
                        )}
                      </>
                    )}
                    {currentStep.id === 'production' && (
                      <ProductionPlanDemo data={currentStep.demo} />
                    )}
                    {currentStep.id === 'formulation' && (
                      <FormulationDemo data={currentStep.demo} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Clock className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                  <div className="text-xs text-slate-400">Time Saved</div>
                  <div className="text-lg font-bold text-green-400">90%</div>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                  <div className="text-xs text-slate-400">Accuracy</div>
                  <div className="text-lg font-bold text-cyan-400">100%</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                  <div className="text-xs text-slate-400">Efficiency</div>
                  <div className="text-lg font-bold text-purple-400">10x</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}