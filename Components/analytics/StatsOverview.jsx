import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, MousePointerClick, Target, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function StatsOverview({ stats }) {
  const metrics = [
    {
      title: 'Total Visitors',
      value: stats.totalVisitors.toLocaleString(),
      change: stats.visitorChange,
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Demo Interactions',
      value: stats.demoClicks.toLocaleString(),
      change: stats.demoChange,
      icon: MousePointerClick,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Conversion Rate',
      value: `${stats.conversionRate}%`,
      change: stats.conversionChange,
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Lead Generation',
      value: stats.leads.toLocaleString(),
      change: stats.leadsChange,
      icon: Mail,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-slate-400 mb-1">{metric.title}</p>
                  <h3 className="text-3xl font-bold text-white mb-2">{metric.value}</h3>
                  <div className="flex items-center gap-1">
                    {metric.change >= 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-sm font-medium ${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.change >= 0 ? '+' : ''}{metric.change}%
                    </span>
                    <span className="text-xs text-slate-500 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} ${metric.bgColor} flex items-center justify-center`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}