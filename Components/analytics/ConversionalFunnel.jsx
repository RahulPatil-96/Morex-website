import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowDown, Users, Eye, MousePointerClick, Mail, CheckCircle } from 'lucide-react';

export default function ConversionFunnel({ data }) {
  const stages = [
    { name: 'Page Visits', value: data.visits, icon: Users, color: 'from-blue-500 to-cyan-500' },
    { name: 'Engaged Users', value: data.engaged, icon: Eye, color: 'from-cyan-500 to-teal-500' },
    { name: 'Demo Interactions', value: data.demoClicks, icon: MousePointerClick, color: 'from-teal-500 to-green-500' },
    { name: 'Contact Form', value: data.formViews, icon: Mail, color: 'from-green-500 to-emerald-500' },
    { name: 'Leads Generated', value: data.leads, icon: CheckCircle, color: 'from-emerald-500 to-green-600' }
  ];

  const maxValue = data.visits;

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-xl text-white">Conversion Funnel</CardTitle>
        <p className="text-sm text-slate-400">From visitor to lead</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stages.map((stage, index) => {
            const percentage = ((stage.value / maxValue) * 100).toFixed(1);
            const conversionRate = index > 0 
              ? ((stage.value / stages[index - 1].value) * 100).toFixed(1)
              : 100;

            return (
              <div key={stage.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center`}>
                      <stage.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{stage.name}</p>
                      <p className="text-xs text-slate-400">
                        {stage.value.toLocaleString()} users
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">{percentage}%</p>
                    {index > 0 && (
                      <p className="text-xs text-green-400">
                        {conversionRate}% conversion
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="relative h-3 bg-slate-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${stage.color} rounded-full`}
                  />
                </div>

                {index < stages.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-5 h-5 text-slate-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">
              {((data.leads / data.visits) * 100).toFixed(1)}%
            </p>
            <p className="text-xs text-slate-400 mt-1">Overall Conversion</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-cyan-400">
              {data.leads}
            </p>
            <p className="text-xs text-slate-400 mt-1">Total Leads</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}