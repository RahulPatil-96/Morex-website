import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsOverview from '@/components/analytics/StatsOverview';
import VisitorChart from '@/components/analytics/VisitorChart';
import FeatureEngagement from '@/components/analytics/FeatureEngagement';
import ConversionFunnel from '@/components/analytics/ConversionFunnel';
import TrafficSources from '@/components/analytics/TrafficSources';

// Generate mock data (in a real app, this would come from your analytics service)
const generateMockData = () => {
  const visitorData = [];
  const dates = ['Jan 1', 'Jan 5', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 30'];
  
  dates.forEach(date => {
    visitorData.push({
      date,
      visitors: Math.floor(Math.random() * 500) + 800,
      returning: Math.floor(Math.random() * 300) + 400
    });
  });

  const featureData = [
    { feature: 'Hero Section', interactions: 4520, engagement: 95 },
    { feature: 'Interactive Demo', interactions: 3240, engagement: 68 },
    { feature: 'Testimonials', interactions: 2890, engagement: 61 },
    { feature: 'Feature Cards', interactions: 3560, engagement: 75 },
    { feature: 'CTA Buttons', interactions: 1980, engagement: 42 },
    { feature: 'Contact Form', interactions: 1240, engagement: 26 }
  ];

  const trafficData = [
    { name: 'Direct', value: 2340, percentage: 35 },
    { name: 'Google Search', value: 2010, percentage: 30 },
    { name: 'Social Media', value: 1340, percentage: 20 },
    { name: 'Referral', value: 670, percentage: 10 },
    { name: 'Email', value: 340, percentage: 5 }
  ];

  const stats = {
    totalVisitors: 6700,
    visitorChange: 12.5,
    demoClicks: 3240,
    demoChange: 18.3,
    conversionRate: 18.5,
    conversionChange: 5.2,
    leads: 1240,
    leadsChange: 22.1
  };

  const funnelData = {
    visits: 6700,
    engaged: 5020,
    demoClicks: 3240,
    formViews: 1680,
    leads: 1240
  };

  return { visitorData, featureData, trafficData, stats, funnelData };
};

export default function Analytics() {
  const [data, setData] = useState(generateMockData());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setData(generateMockData());
      setIsRefreshing(false);
    }, 1000);
  };

  const handleExport = () => {
    // In a real app, this would export actual data
    const exportData = {
      generatedAt: new Date().toISOString(),
      ...data.stats
    };
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics-${Date.now()}.json`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-white mb-2"
              >
                Analytics Dashboard
              </motion.h1>
              <p className="text-slate-400">Morex Technologies Website Performance</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
                onClick={handleExport}
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                <Calendar className="w-4 h-4 mr-2" />
                Last 30 Days
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Overview */}
        <StatsOverview stats={data.stats} />

        {/* Main Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <VisitorChart data={data.visitorData} />
          <FeatureEngagement data={data.featureData} />
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <ConversionFunnel data={data.funnelData} />
          <TrafficSources data={data.trafficData} />
        </div>

        {/* Real-time Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { time: '2 min ago', action: 'User clicked Demo - Order Collaboration', location: 'Mumbai, India' },
              { time: '5 min ago', action: 'New visitor from Google Search', location: 'Delhi, India' },
              { time: '8 min ago', action: 'User submitted contact form', location: 'Bangalore, India' },
              { time: '12 min ago', action: 'User viewed Testimonials', location: 'Pune, India' },
              { time: '15 min ago', action: 'User clicked CTA - Schedule Demo', location: 'Chennai, India' }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between py-3 px-4 bg-slate-900/50 rounded-lg border border-slate-700/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <p className="text-sm text-slate-300">{activity.action}</p>
                    <p className="text-xs text-slate-500">{activity.location}</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Avg. Session Duration', value: '4m 32s' },
            { label: 'Bounce Rate', value: '32.4%' },
            { label: 'Pages per Session', value: '3.8' },
            { label: 'Mobile Traffic', value: '58%' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}