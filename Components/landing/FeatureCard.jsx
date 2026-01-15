import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ feature, index, icon: Icon, disableAnimation = false }) {
  const animationProps = disableAnimation ? {} : {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, delay: index * 0.1 }
  };

  return (
    <motion.div
      {...animationProps}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-3xl p-8 hover:border-white/10 transition-all duration-500 hover:bg-white/[0.04]">
        {/* Number badge */}
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30">
          {feature.number}
        </div>

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-cyan-400" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
          {feature.title}
        </h3>

        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Feature</p>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.feature}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Advantage</p>
            <ul className="space-y-1.5">
              {feature.advantages.map((adv, i) => (
                <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  {adv}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlight quote */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          <p className="text-sm text-amber-400/90 font-medium italic">
            👉 {feature.highlight}
          </p>
        </div>
      </div>
    </motion.div>
  );
}