import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-white text-sm font-semibold mb-1">{payload[0].payload.feature}</p>
        <p className="text-cyan-400 text-xs">
          {payload[0].value.toLocaleString()} interactions
        </p>
        <p className="text-slate-400 text-xs">
          {payload[0].payload.engagement}% engagement rate
        </p>
      </div>
    );
  }
  return null;
};

export default function FeatureEngagement({ data }) {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-xl text-white">Feature Engagement</CardTitle>
        <p className="text-sm text-slate-400">User interactions by feature section</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="feature" 
              stroke="#64748b" 
              style={{ fontSize: '11px' }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="interactions" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Engagement breakdown */}
        <div className="mt-6 space-y-2">
          {data.map((item, index) => (
            <div key={item.feature} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm text-slate-300">{item.feature}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400">{item.interactions.toLocaleString()} clicks</span>
                <span className="text-sm font-semibold text-cyan-400">{item.engagement}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}